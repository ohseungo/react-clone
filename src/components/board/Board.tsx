import { useSelector } from "react-redux";
import { RootState } from "store";
import { MAX_TRYOUT } from "constants/game";
import "./Board.css";
import FixedRow from "./FixedRow";
import CurrentRow from "./CurrentRow";

const Board = () => {
  const guesses = useSelector((state: RootState) => state.game.guesses);
  const currentGuess = useSelector(
    (state: RootState) => state.game.currentGuess
  );

  const emptyRows =
    guesses.length < MAX_TRYOUT - 1
      ? Array.from({ length: MAX_TRYOUT - 1 - guesses.length })
      : [];
  return (
    <div id="board-container">
      <div id="board">
        {guesses.map((word, index) => (
          <FixedRow key={index} word={word} />
        ))}
        <CurrentRow guess={currentGuess} />
        {emptyRows.map((word, index) => (
          <FixedRow key={index} />
        ))}
      </div>
    </div>
  );
};

export default Board;
