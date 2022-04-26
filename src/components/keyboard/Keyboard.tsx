import Key from "./Key";
import "./Keyboard.css";

const Keyboard = () => {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", ""];
  const thirdRow = ["ENTER", "z", "x", "c", "v", "b", "n", "m", "BACK"];
  return (
    <div id="keyboard">
      <div className="keyboard-row">
        {firstRow.map((key) => (
          <Key key={key} value={key} />
        ))}
      </div>
      <div className="keyboard-row">
        {secondRow.map((key) => (
          <Key key={key} value={key} />
        ))}
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
