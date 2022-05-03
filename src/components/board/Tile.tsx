import { useState } from "react";
import "./Tile.css";
import React from "react";
import { LetterStat } from "lib/guess";
interface Props {
  letter?: string;
  letterStat?: LetterStat;
}

type TileState = "empty" | "tbd" | "correct" | "present" | "absent";

const Tile = ({ letter, letterStat = undefined }: Props) => {
  const isCompleted = !!letterStat && letter;
  const isEmptyToTbd = !letterStat && letter;

  const initialAnimation = isEmptyToTbd ? "pop-in" : isCompleted ? "flip" : "";
  const [animation, setAnimation] = useState(initialAnimation);
  const [state, setState] = useState<TileState>(isEmptyToTbd ? "tbd" : "empty");

  // useEffect(() => {
  //   if (isEmptyToTbd) {
  //     setState("tbd");
  //     setAnimation("pop-in");
  //   } else if (isCompleted) {
  //     setAnimation("flip");
  //   }
  // }, [isEmptyToTbd, isCompleted]);

  const handleAnimationEnd = (event: React.AnimationEvent) => {
    switch (event.animationName) {
      case "PopIn":
        setAnimation("");
        break;
      case "Flip":
        setAnimation("");
        if (letterStat) setState(letterStat);
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
