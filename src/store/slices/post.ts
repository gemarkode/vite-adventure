import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { fetchPosts } from "../actions/fetchPosts";

export interface PostState {
  posts: any[];
  status: "idle" | "loading" | "failed";
}

const initialState: PostState = {
  posts: [],
  status: "idle",
};

export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const response = await fetchPosts();
  return response.data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<any[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = "idle";
      })
      .addCase(fetchPost.rejected, (state) => {
        state.status = "failed";
      })
      .addDefaultCase((state) => {
        state.status = "idle";
      });
  },
});

export const { setPosts } = postSlice.actions;
export const selectPosts = (state: RootState) => state.post.posts;
export const selectStatus = (state: RootState) => state.post.status;
export default postSlice.reducer;
