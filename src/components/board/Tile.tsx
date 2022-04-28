import "./Tile.css";

const Tile = ({ letter }: { letter?: string }) => {
  return <div className="tile">{letter}</div>;
};

export default Tile;
