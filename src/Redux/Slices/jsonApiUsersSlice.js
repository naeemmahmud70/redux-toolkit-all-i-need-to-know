import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const jsonApiUsersSlice = createSlice({
  name: "JsonApiUsers",
  initialState,
  reducers: {
    setJsonUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setJsonUser } = jsonApiUsersSlice.actions;
export default jsonApiUsersSlice.reducer;
