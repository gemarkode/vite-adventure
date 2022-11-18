import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface Inventory {
  sword: boolean;
}
export interface PlayerState {
  health: number;
  inventory: Inventory;
}

const initialState: PlayerState = {
  health: 100,
  inventory: {
    sword: false,
  },
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
    pickUpSword: (state) => {
      state.inventory.sword = true;
    },
    dropSword: (state) => {
      state.inventory.sword = false;
    },
  },
});

export const { hit, criticalHit, heal, restore, pickUpSword, dropSword } =
  playerSlice.actions;
export const selectHealth = (state: RootState) => state.player.health;
export default playerSlice.reducer;
