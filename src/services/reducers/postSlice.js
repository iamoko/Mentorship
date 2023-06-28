import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loaded: false,
  posts:[]
};

export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    isLoaded: (state, action) => {
      state.loaded = action.payload;
    },
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { reset, isLoaded, addPosts } =
postSlice.actions;

export const addPost = {
  loaded: (loaded) => (dispatch) => {
    dispatch(isLoaded(loaded));
  },
  posts: (posts) => (dispatch) => {
    dispatch(addPosts(posts));
  },
};

export const posts = {
  loaded: (state) => state.posts.loaded,
  posts: (state) => state.posts.posts,
};

export default postSlice.reducer;
