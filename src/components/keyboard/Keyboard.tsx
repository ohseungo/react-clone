import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Key from "./Key";
import "./Keyboard.css";

import {
  KEYBOARD_FIRST_ROW_KEYS,
  KEYBOARD_SECOND_ROW_KEYS,
  KEYBOARD_THIRD_ROW_KEYS,
  WORD_LENGTH,
} from "constants/game";

import {
  appendCurrentGuessToGuesses,
  appendKeyToCurrentGuess,
  deleteCurrentGuess,
} from "store/gameProgress";

import { addToastMessage, setGuessAnimation } from "store/system";
import { RootState } from "store";
import { NOT_ENOUGH_LETTERS_MESSAGE } from "constants/system";

const Keyboard = () => {
  const dispatch = useDispatch();
  const currentGuess = useSelector(
    (state: RootState) => state.game.currentGuess
  );

  const onKey = (key: string) => {
    dispatch(appendKeyToCurrentGuess({ appendingLetter: key }));
  };
  const onDelete = () => {
    dispatch(deleteCurrentGuess());
  };
  const onEnter = () => {
    if (currentGuess.length < WORD_LENGTH) {
      dispatch(addToastMessage({ message: NOT_ENOUGH_LETTERS_MESSAGE }));
      dispatch(setGuessAnimation({ guessAnimation: "Shake" }));
    } else {
      dispatch(appendCurrentGuessToGuesses());
    }
  };

  const keyPressEventListener = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
        onEnter();
        break;
      case "Backspace":
        onDelete();
        break;
      default:
        if (
          event.key.length === 1 &&
          event.key.toUpperCase() >= "A" &&
          event.key.toUpperCase() <= "Z"
        ) {
          onKey(event.key.toUpperCase());
        }
    }
  };
  const onClick = (letter: string) => {
    switch (letter) {
      case "ENTER":
        onEnter();
        break;
      case "BACK":
        onDelete();
        break;
      default:
        if (letter.toUpperCase() >= "A" && letter.toUpperCase() <= "Z") {
          onKey(letter.toUpperCase());
        }
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", keyPressEventListener);

    return () => {
      window.removeEventListener("keyup", keyPressEventListener);
    };
  });
  return (
    <div id="keyboard">
      <div className="keyboard-row">
        {KEYBOARD_FIRST_ROW_KEYS.map((key) => (
          <Key key={key} value={key} onClick={onClick} />
        ))}
      </div>
      <div className="keyboard-row">
        <Key value="" />
        {KEYBOARD_SECOND_ROW_KEYS.map((key) => (
          <Key key={key} value={key} onClick={onClick} />
        ))}
        <Key value="" />
      </div>
      <div className="keyboard-row">
        {KEYBOARD_THIRD_ROW_KEYS.map((key) => (
          <Key key={key} value={key} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Keyboard);
