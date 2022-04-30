import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WORD_LENGTH } from "constants/game";

export interface GameProgressState {
  guesses: string[];
  currentGuess: string;
  answer: string;
}

export interface GameProgressAction {
  appendingLetter: string;
}

const initialState: GameProgressState = {
  guesses: ["TAKER"],
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
  },
});
export const { appendKeyToCurrentGuess, deleteCurrentGuess } =
  gameProgressSlice.actions;
export default gameProgressSlice.reducer;
