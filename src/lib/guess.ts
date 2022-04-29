export type LetterHint = "correct" | "present" | "abscent";

export interface GuessResult {
  isCorrect: boolean;
  letterHints: LetterHint[];
}
