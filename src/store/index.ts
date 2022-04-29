import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameProgress";
import systemReducer from "./system";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    system: systemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
