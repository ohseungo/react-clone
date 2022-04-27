import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Key from "./Key";
import "./Keyboard.css";

import { addGuess } from "store/game";

const Keyboard = () => {
  const dispatch = useDispatch();
  const keyPressEventListener = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ENTER":
        break;
      case "Backspace":
        break;
      default:
        if (event.key.toUpperCase() >= "A" && event.key.toUpperCase() <= "Z") {
          dispatch(addGuess({ letter: event.key.toUpperCase() }));
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
          <Key key={key} value={key} />
        ))}
      </div>
      <div className="keyboard-row">
        <Key value="" />
        {secondRow.map((key) => (
          <Key key={key} value={key} />
        ))}
        <Key value="" />
      </div>
      <div className="keyboard-row">
        {thirdRow.map((key) => (
          <Key key={key} value={key} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
