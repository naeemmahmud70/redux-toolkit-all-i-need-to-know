import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUser } from "../Middleware/usersMiddleware";

const initialState = {
  users: [],
  user: {},
  loader: false,
  errors: null,
};

export const jsonApiUsersSlice = createSlice({
  name: "JsonApiUsers",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loader = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loader = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getUser.pending]: (state, action) => {
      state.loader = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export default jsonApiUsersSlice.reducer;
