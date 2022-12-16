import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
export interface PlayerState {
  health: number;
  money: number;
  dabloons: number;
}

const initialState: PlayerState = {
  health: 100,
  money: 0,
  dabloons: 0,
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
    addMoney: (state, action) => {
      state.money += action.payload;
    },
    addDabloons: (state, action) => {
      state.dabloons += action.payload;
    },
    subtractMoney: (state, action) => {
      state.money -= action.payload;
    },
    subtractDabloons: (state, action) => {
      state.dabloons -= action.payload;
    },
  },
});

export const { hit, criticalHit, heal, restore } = playerSlice.actions;
export const selectPlayer = (state: RootState) => state.player;
export default playerSlice.reducer;
