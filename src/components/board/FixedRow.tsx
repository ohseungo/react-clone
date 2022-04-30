import "./Row.css";
import Tile from "./Tile";

const FixedRow = ({ word }: { word?: string }) => {
  const splitedWord = word ? word.split("") : Array.from(Array(5));
  return (
    <div className="row">
      {splitedWord.map((letter, index) => (
        <Tile key={index} letter={letter} />
      ))}
    </div>
  );
};

export default FixedRow;
