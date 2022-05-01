import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WORD_LENGTH } from "constants/game";
import { getGuessStat, LetterStat } from "lib/guess";
export interface GameProgressState {
  guesses: string[];
  guessStats: LetterStat[][];
  currentGuess: string;
  answer: string;
}

export interface GameProgressAction {
  appendingLetter: string;
}

const initialState: GameProgressState = {
  guesses: [],
  guessStats: [],
  currentGuess: "",
  answer: "fight",
};

export const gameProgressSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    appendKeyToCurrentGuess: (
      state: GameProgressState,
      action: PayloadAction<GameProgressAction>
    ) => {
      if (state.currentGuess.length < WORD_LENGTH) {
        state.currentGuess += action.payload.appendingLetter;
      }
    },
    deleteCurrentGuess: (state: GameProgressState) => {
      if (state.currentGuess.length > 0) {
        state.currentGuess = state.currentGuess.slice(0, -1);
      }
    },
    appendCurrentGuessToGuesses: (state: GameProgressState) => {
      state.guesses.push(state.currentGuess);
      state.guessStats.push(
        getGuessStat(state.currentGuess, state.answer.toLocaleUpperCase())
      );

      state.currentGuess = "";
    },
  },
});
export const {
  appendKeyToCurrentGuess,
  deleteCurrentGuess,
  appendCurrentGuessToGuesses,
} = gameProgressSlice.actions;
export default gameProgressSlice.reducer;
