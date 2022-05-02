import { WORD_LENGTH } from "constants/game";

export type LetterStat = "correct" | "present" | "absent";

export const getGuessStat = (guess: string, answer: string): LetterStat[] => {
  const splitedGuess = guess.toUpperCase().split("");
  const splitedAnswer = answer.toUpperCase().split("");

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

export const getGuessStats = (
  guesses: string[],
  answer: string
): LetterStat[][] => {
  return guesses.map((guess, index) => {
    return getGuessStat(guess, answer);
  });
};

export const getKeyStats = (
  guesses: string[],
  answer: string
): { [key: string]: LetterStat } => {
  const keyStats: { [key: string]: LetterStat } = {};
  const splitedAnswer = answer.split("");

  guesses.forEach((guess) => {
    guess.split("").forEach((letter, index) => {
      if (!splitedAnswer.includes(letter)) {
        keyStats[letter.toLowerCase()] = "absent";
      } else if (letter === splitedAnswer[index]) {
        keyStats[letter.toLowerCase()] = "correct";
      } else {
        keyStats[letter.toLowerCase()] = "present";
      }
    });
  });

  return keyStats;
};
