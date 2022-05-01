import { WORD_LENGTH } from "constants/game";

export type LetterHint = "correct" | "present" | "abscent";

export interface GuessResult {
  isCorrect: boolean;
  letterHints: LetterHint[];
}

export type LetterStat = "correct" | "present" | "absent";

export const getGuessStat = (guess: string, answer: string): LetterStat[] => {
  const splitedGuess = guess.split("");
  const splitedAnswer = answer.split("");

  const answerCheck: boolean[] = Array.from({ length: WORD_LENGTH }).map(
    () => false
  );
  const guessStat: LetterStat[] = Array.from({ length: WORD_LENGTH });
  splitedGuess.forEach((letter, index) => {
    if (letter === splitedAnswer[index]) {
      guessStat[index] = "correct";
      answerCheck[index] = true;
    }
  });

  console.log(guessStat);
  splitedGuess.forEach((letter, index) => {
    if (guessStat[index]) {
      return;
    } else if (!splitedAnswer.includes(letter)) {
      guessStat[index] = "absent";
    } else {
      // 이미 체크되지 않은 letter 위치 중 present 해당하는 letter 위치 찾기
      const presentIndex = splitedAnswer.findIndex(
        (answerLetter, i) => answerLetter === letter && !answerCheck[i]
      );

      if (presentIndex > -1) {
        guessStat[index] = "present";
        answerCheck[presentIndex] = true;
      } else {
        guessStat[index] = "absent";
      }
    }
  });
  return guessStat;
};
