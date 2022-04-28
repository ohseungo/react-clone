import "./Row.css";
import Tile from "./Tile";

const FixedRow = () => {
  const dummyCell = [0, 0, 0, 0, 0];
  return (
    <div className="row">
      {dummyCell.map((value, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
};

export default FixedRow;
