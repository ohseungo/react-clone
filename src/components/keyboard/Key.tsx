import "./Key.css";

const Key = ({
  value,
  onClick,
}: {
  value: string;
  onClick?: (key: string) => void;
}) => {
  const handleClick = () => {
    if (onClick) onClick(value);
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
      return <button onClick={handleClick}>{value}</button>;
  }
};

export default Key;
