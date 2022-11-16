import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface PlayerState {
  health: number;
}

const initialState: PlayerState = {
  health: 100,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    hit: (state) => {
      state.health -= 10;
    },
    criticalHit: (state) => {
      state.health -= 20;
    },
    heal: (state) => {
      state.health += 10;
    },
    restore: (state) => {
      state.health = 100;
    },
  },
});

export const { hit, criticalHit, heal, restore } = playerSlice.actions;
export const selectHealth = (state: RootState) => state.player.health;
export default playerSlice.reducer;
