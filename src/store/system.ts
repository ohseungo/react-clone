import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GuessAnimationType = "Shake" | undefined;

export interface SystemState {
  showToast: boolean;
  toastMessage?: string;
  guessAnimation: GuessAnimationType;
  isGameLocked: boolean;
}

export interface SystemAction {
  message?: string;
  guessAnimation?: GuessAnimationType;
}

const initialState: SystemState = {
  showToast: false,
  guessAnimation: undefined,
  isGameLocked: false,
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    addToastMessage: (
      state: SystemState,
      action: PayloadAction<SystemAction>
    ) => {
      state.showToast = true;
      state.toastMessage = action.payload.message;
    },
    closeToastMessage: (state: SystemState) => {
      state.showToast = false;
    },
    setGuessAnimation: (
      state: SystemState,
      action: PayloadAction<SystemAction>
    ) => {
      state.guessAnimation = action.payload.guessAnimation;
    },
    removeGuessAnimation: (state: SystemState) => {
      state.guessAnimation = undefined;
    },
  },
});
export const {
  addToastMessage,
  closeToastMessage,
  setGuessAnimation,
  removeGuessAnimation,
} = systemSlice.actions;
export default systemSlice.reducer;
