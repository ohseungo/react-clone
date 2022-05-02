import { LetterStat } from "lib/guess";
import { MouseEventHandler } from "react";
import "./Key.css";
interface Props {
  value: string;
  status?: LetterStat;
  onClick?: (letter: string) => void;
}
const Key = ({ value, status, onClick }: Props) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) onClick(value);
    event.currentTarget.blur();
  };
  switch (value) {
    case "":
      return <div className="keyboard-spacer-half"></div>;
    case "ENTER":
    case "BACK":
      return (
        <button className="keyboard-one-and-half" onClick={handleClick}>
          {value}
        </button>
      );
    default:
      return (
        <button onClick={handleClick} data-state={status}>
          {value}
        </button>
      );
  }
};

export default Key;
