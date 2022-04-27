import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WORD_LENGTH } from "lib/word";

export interface GameState {
  // guesses: string[];
  currentGuess: string;
  answer: string;
  error?: string;
}

export interface GameAction {
  letter: string;
}

const initialState: GameState = {
  currentGuess: "",
  answer: "fight",
};

const concatLetterToCurrentGuess = (
  state: GameState,
  action: PayloadAction<GameAction>
) => {
  if (state.currentGuess.length >= WORD_LENGTH) {
    state.error = "Error";
  } else {
    state.currentGuess += action.payload.letter;
  }
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addGuess: concatLetterToCurrentGuess,
  },
});
export const { addGuess } = gameSlice.actions;
export default gameSlice.reducer;
