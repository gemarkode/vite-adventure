import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface MusicState {
  playing: boolean;
  volume: number;
}

const initialState: MusicState = {
  playing: false,
  volume: 100,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    play: (state) => {
      state.playing = true;
    },
    pause: (state) => {
      state.playing = false;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const { play, pause, setVolume } = musicSlice.actions;
export const selectPlaying = (state: RootState) => state.music.playing;
export const selectVolume = (state: RootState) => state.music.volume;
export default musicSlice.reducer;
