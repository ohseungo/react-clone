import "./Key.css";

const Key = ({ value }: { value: string }) => {
  switch (value) {
    case "":
      return <div className="keyboard-spacer-half"></div>;
    case "ENTER":
    case "BACK":
      return <button className="keyboard-one-and-half">{value}</button>;
    default:
      return <button>{value}</button>;
  }
};

export default Key;
