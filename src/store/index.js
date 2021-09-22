import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "redux-devtools-extension";

import auth from "./authSlice"
import activate from "./activateSlice"
export const store = configureStore({
  reducer: {
      auth,
      activate,
  }, 
});
