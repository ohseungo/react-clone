import { LetterStat } from "lib/guess";
import "./Row.css";
import Tile from "./Tile";

const FixedRow = ({
  word,
  guessStat,
}: {
  word?: string;
  guessStat?: LetterStat[];
}) => {
  const splitedWord = word ? word.split("") : Array.from(Array(5));
  return (
    <div className="row">
      {splitedWord.map((letter, index) => (
        <Tile
          key={index}
          letter={letter}
          letterStat={guessStat ? guessStat[index] : undefined}
        />
      ))}
    </div>
  );
};

export default FixedRow;
