import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";
import creatingObjectArraySlice from "./Slices/creatingObjectArraySlice";
import creatingObjectSlice from "./Slices/creatingObjectSlice";
import jsonApiUsersSlice from "./Slices/jsonApiUsersSlice";
import multiplySlice from "./Slices/multiplyCounterSlice";
import toggleStatusSlice from "./Slices/toggleStatusSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    multiplyCounter: multiplySlice,
    toggleStatus: toggleStatusSlice,
    jsonUsers: jsonApiUsersSlice,
    createdObject: creatingObjectSlice,
    createdObjectArray: creatingObjectArraySlice,
  },
});
