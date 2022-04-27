import "./Board.css";
import Row from "./Row";

const Board = () => {
  const dummyRow = [0, 0, 0, 0, 0, 0];
  return (
    <div id="board-container">
      <div id="board">
        {dummyRow.map((value, index) => (
          <Row key={index} />
        ))}
      </div>
    </div>
  );
};

export default Board;
