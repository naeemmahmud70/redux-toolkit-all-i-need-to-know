import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ name: "Naeem", email: "naeem@braina.live" }],
};

export const creatingObjectArraySlice = createSlice({
  name: "creatingObjectArray",
  initialState,
  reducers: {
    setInObjectArray: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setInObjectArray } = creatingObjectArraySlice.actions;
export default creatingObjectArraySlice.reducer;
