import { useSelector } from "react-redux";
import { GameProgressState } from "store/gameProgress";
import { MAX_TRYOUT } from "constants/game";
import "./Board.css";
import FixedRow from "./FixedRow";
import CurrentRow from "./CurrentRow";

const Board = () => {
  const guesses = useSelector((state: GameProgressState) => state.guesses);
  const currentGuess = useSelector(
    (state: GameProgressState) => state.currentGuess
  );
  const emptyRows =
    guesses.length < MAX_TRYOUT - 1
      ? Array.from({ length: MAX_TRYOUT - 1 - guesses.length })
      : [];
  return (
    <div id="board-container">
      <div id="board">
        {guesses.map((value, index) => (
          <FixedRow key={index} />
        ))}
        <CurrentRow guess={currentGuess} />
        {emptyRows.map((value, index) => (
          <FixedRow key={index} />
        ))}
      </div>
    </div>
  );
};

export default Board;
