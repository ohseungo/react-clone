import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Key from "./Key";
import "./Keyboard.css";

import {
  KEYBOARD_FIRST_ROW_KEYS,
  KEYBOARD_SECOND_ROW_KEYS,
  KEYBOARD_THIRD_ROW_KEYS,
} from "constants/game";

import {
  appendKeyToCurrentGuess,
  deleteCurrentGuess,
} from "store/gameProgress";
import { addToastMessage } from "store/system";

const Keyboard = () => {
  const dispatch = useDispatch();
  const onKey = (key: string) => {
    dispatch(appendKeyToCurrentGuess({ appendingLetter: key }));
  };
  const onDelete = () => {
    dispatch(deleteCurrentGuess());
  };
  const onEnter = () => {
    dispatch(addToastMessage({ message: "Test" }));
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
        if (event.key.toUpperCase() >= "A" && event.key.toUpperCase() <= "Z") {
          onKey(event.key.toUpperCase());
        }
    }
  };
  const onClick = (letter: string) => {
    switch (letter) {
      case "ENTER":
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

export default Keyboard;
