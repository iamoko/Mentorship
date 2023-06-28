import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  chatKey: "",
  chat: {},
  title: "",
  uid: "",
};

export const chatSlice = createSlice({
  name: "chats",
  initialState: initialState,
  reducers: {
    addChats: (state, action) => {
      state.chats = action.payload;
    },
    addChatKey: (state, action) => {
      state.chatKey = action.payload;
    },
    addTitle: (state, action) => {
      state.title = action.payload;
    },
    addUid: (state, action) => {
      state.uid = action.payload;
    },
    addChatData: (state, action) => {
      state.chat = action.payload;
    },
  },
});

export const { reset, addChats, addChatKey, addTitle, addUid, addChatData } =
  chatSlice.actions;

export const addChat = {
  chats: (chats) => (dispatch) => {
    dispatch(addChats(chats));
  },
  chatKey: (chatKey) => (dispatch) => {
    dispatch(addChatKey(chatKey));
  },
  title: (title) => (dispatch) => {
    dispatch(addTitle(title));
  },
  uid: (uid) => (dispatch) => {
    dispatch(addUid(uid));
  },
  chat: (chat) => (dispatch) => {
    dispatch(addChatData(chat));
  },
};

export const chats = {
  chats: (state) => state.chats.chats,
  chatKey: (state) => state.chats.chatKey,
  title: (state) => state.chats.title,
  uid: (state) => state.chats.uid,
  chat: (state) => state.chats.chat,
};

export default chatSlice.reducer;
