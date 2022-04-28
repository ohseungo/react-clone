import { WORD_LENGTH } from "constants/game";
import "./Row.css";
import Tile from "./Tile";

const CurrentRow = ({ guess }: { guess: string }) => {
  const guessLetters = guess.split("");
  const emptyTiles = Array.from({ length: WORD_LENGTH - guessLetters.length });

  return (
    <div className="row">
      {guessLetters.map((letter, index) => (
        <Tile key={index} letter={letter} />
      ))}
      {emptyTiles.map((value, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
};

export default CurrentRow;
