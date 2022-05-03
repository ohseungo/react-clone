import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Key from "./Key";
import "./Keyboard.css";

import {
  KEYBOARD_FIRST_ROW_KEYS,
  KEYBOARD_SECOND_ROW_KEYS,
  KEYBOARD_THIRD_ROW_KEYS,
  MAX_TRYOUT,
  WORD_LENGTH,
} from "constants/game";

import {
  appendCurrentGuessToGuesses,
  appendKeyToCurrentGuess,
  deleteCurrentGuess,
} from "store/gameProgress";

import { addToastMessage, setGuessAnimation } from "store/system";
import { RootState } from "store";
import {
  NOT_ENOUGH_LETTERS_MESSAGE,
  NOT_IN_WORDLIST_MESSAGE,
  WINNING_MESSAGE,
} from "constants/system";
import { answer, updateGameSetupByCurrentGuess } from "lib/gameSetup";
import { WORDS } from "constants/wordList";
import { getKeyStats } from "lib/guess";

const Keyboard = () => {
  // const [isKeyboardLocked, setKeyboardLocked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentGuess = useSelector(
    (state: RootState) => state.game.currentGuess
  );
  const guesses = useSelector((state: RootState) => state.game.guesses);

  const keyStats = getKeyStats(guesses, answer);
  const isGameWon = guesses.includes(answer);
  const isGameLost = !isGameWon && guesses.length >= MAX_TRYOUT;

  const isKeyboardLocked = !isGameWon && !isGameLost ? false : true;

  if (isGameWon) {
    dispatch(addToastMessage({ message: WINNING_MESSAGE }));
  } else if (isGameLost) {
    dispatch(addToastMessage({ message: answer }));
  }

  // useEffect(() => {
  //   if (isGameWon) {
  //     dispatch(addToastMessage({ message: WINNING_MESSAGE }));
  //     setKeyboardLocked(true);
  //   } else if (isGameLost) {
  //     dispatch(addToastMessage({ message: answer }));
  //     setKeyboardLocked(true);
  //   }
  // }, [dispatch, isGameLost, isGameWon]);

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
    } else if (!WORDS.includes(currentGuess.toLowerCase())) {
      dispatch(addToastMessage({ message: NOT_IN_WORDLIST_MESSAGE }));
      dispatch(setGuessAnimation({ guessAnimation: "Shake" }));
    } else {
      dispatch(appendCurrentGuessToGuesses());
      updateGameSetupByCurrentGuess(currentGuess, guesses);
    }
  };

  const keyPressEventListener = (event: KeyboardEvent) => {
    if (isKeyboardLocked) return;
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
    if (isKeyboardLocked) return;
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

  const savedHandler = useRef<any>();
  savedHandler.current = keyPressEventListener;

  useEffect(() => {
    const refKeyPressEventListener = (e: any) => savedHandler.current(e);
    // const refKeyPressEventListner = savedHandler.current;
    // const refKeyPressEventListener = (e: any) => keyPressEventListener(e);
    window.addEventListener("keyup", refKeyPressEventListener);

    return () => {
      window.removeEventListener("keyup", refKeyPressEventListener);
    };
  }, []);

  return (
    <div id="keyboard">
      <div className="keyboard-row">
        {KEYBOARD_FIRST_ROW_KEYS.map((key) => (
          <Key key={key} value={key} onClick={onClick} status={keyStats[key]} />
        ))}
      </div>
      <div className="keyboard-row">
        <Key value="" />
        {KEYBOARD_SECOND_ROW_KEYS.map((key) => (
          <Key key={key} value={key} onClick={onClick} status={keyStats[key]} />
        ))}
        <Key value="" />
      </div>
      <div className="keyboard-row">
        {KEYBOARD_THIRD_ROW_KEYS.map((key) => (
          <Key key={key} value={key} onClick={onClick} status={keyStats[key]} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Keyboard);
