import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getStory } from "../actions/getStory";
import type { Story } from "../../storyline/types";

const initialState: Story = {
  id: "",
  title: "",
  description: "",
  choices: [],
  imageQuery: "",
};

export const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    setStage: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const story = getStory(id);
      if (story) {
        state.id = story.id;
        state.title = story.title;
        state.description = story.description;
        state.choices = story.choices;
        state.imageQuery = story.imageQuery || "";
        state.ending = story.ending || false;
      }
    },
    reset: (state) => {
      state.id = "";
      state.title = "";
      state.description = "";
      state.choices = [];
      state.imageQuery = "";
    },
  },
});

export const { setStage, reset } = stageSlice.actions;
export const selectStage = (state: RootState) => state.stage;
export default stageSlice.reducer;
