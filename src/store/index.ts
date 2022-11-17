import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import player from "./slices/player";
import stage from "./slices/stage";
import music from "./slices/music";

const store = configureStore({
  reducer: {
    player,
    stage,
    music,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
