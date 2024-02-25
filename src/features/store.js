import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import themeSlice from "./darkModeSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
  },
});

export default store;
