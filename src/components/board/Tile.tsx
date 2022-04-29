import { useEffect, useState } from "react";
import "./Tile.css";
import React from "react";
interface Props {
  letter?: string;
}

type TileState = "empty" | "tbd";

const Tile = ({ letter }: Props) => {
  const [animation, setAnimation] = useState("");
  const [state, setState] = useState<TileState>("empty");
  useEffect(() => {
    if (state === "empty") {
      if (letter) {
        setState("tbd");
        setAnimation("pop-in");
      }
    }
  }, [state, letter]);

  const handleAnimationEnd = (event: React.AnimationEvent) => {
    switch (event.animationName) {
      case "PopIn":
        setAnimation("");
        break;
      default:
    }
  };
  return (
    <div
      className="tile"
      data-state={state}
      data-animation={animation}
      onAnimationEnd={handleAnimationEnd}
    >
      {letter}
    </div>
  );
};

export default React.memo(Tile);
