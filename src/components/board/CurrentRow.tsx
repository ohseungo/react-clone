import { WORD_LENGTH } from "constants/game";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { removeGuessAnimation } from "store/system";
import "./Row.css";
import Tile from "./Tile";

const CurrentRow = ({ guess }: { guess: string }) => {
  const guessLetters = guess.split("");
  const emptyTiles = Array.from({ length: WORD_LENGTH - guessLetters.length });

  const dispatch = useDispatch();
  const guessAnimation = useSelector(
    (state: RootState) => state.system.guessAnimation
  );
  const [animation, setAnimation] = useState<string>("");

  useEffect(() => {
    if (guessAnimation) setAnimation(guessAnimation);
  }, [guessAnimation]);

  const handleAnimationEnd = (event: React.AnimationEvent) => {
    setAnimation("");
    dispatch(removeGuessAnimation());
  };

  return (
    <div
      className="row"
      data-animation={animation}
      onAnimationEnd={handleAnimationEnd}
    >
      {guessLetters.map((letter, index) => (
        <Tile key={index} letter={letter} />
      ))}
      {emptyTiles.map((value, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
};

export default CurrentRow;
