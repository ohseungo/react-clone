import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Key from "./Key";
import "./Keyboard.css";

import {
  appendKeyToCurrentGuess,
  deleteCurrentGuess,
} from "store/gameProgress";

const Keyboard = () => {
  const dispatch = useDispatch();
  const onKey = (key: string) => {
    dispatch(appendKeyToCurrentGuess({ key }));
  };
  const onDelete = () => {
    dispatch(deleteCurrentGuess());
  };
  const keyPressEventListener = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ENTER":
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
  const onClick = (key: string) => {
    switch (key) {
      case "ENTER":
        break;
      case "BACK":
        onDelete();
        break;
      default:
        if (key.toUpperCase() >= "A" && key.toUpperCase() <= "Z") {
          onKey(key.toUpperCase());
        }
    }
  };
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["ENTER", "z", "x", "c", "v", "b", "n", "m", "BACK"];

  useEffect(() => {
    window.addEventListener("keyup", keyPressEventListener);

    return () => {
      window.removeEventListener("keyup", keyPressEventListener);
    };
  });
  return (
    <div id="keyboard">
      <div className="keyboard-row">
        {firstRow.map((key) => (
          <Key key={key} value={key} onClick={onClick} />
        ))}
      </div>
      <div className="keyboard-row">
        <Key value="" />
        {secondRow.map((key) => (
          <Key key={key} value={key} onClick={onClick} />
        ))}
        <Key value="" />
      </div>
      <div className="keyboard-row">
        {thirdRow.map((key) => (
          <Key key={key} value={key} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
