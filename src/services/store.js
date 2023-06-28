import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chatSlice";

export default configureStore({
  reducer: {
    chats: chatReducer,
  },
});
