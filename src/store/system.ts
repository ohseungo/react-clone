import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemState {
  showToast: boolean;
  toastMessage?: string;
  isGameLocked: boolean;
}

export interface SystemAction {
  message?: string;
}

const initialState: SystemState = {
  showToast: false,
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
  },
});
export const { addToastMessage, closeToastMessage } = systemSlice.actions;
export default systemSlice.reducer;
