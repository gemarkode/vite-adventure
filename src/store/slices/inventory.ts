import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface InventoryItem {
  name: string;
  description: string;
  id: string;
  icon: string;
}
export interface InventoryState {
  items: InventoryItem[];
  expand: boolean;
}

const initialState: InventoryState = {
  items: [],
  expand: false,
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<InventoryItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<InventoryItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    toggleExpand: (state) => {
      state.expand = !state.expand;
    },
  },
});

export const { addItem, removeItem, toggleExpand } = inventorySlice.actions;
export const selectItems = (state: RootState) => state.inventory.items;
export const selectExpand = (state: RootState) => state.inventory.expand;
export default inventorySlice.reducer;
