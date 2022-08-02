import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "Naeem", email: "naeem@braina.live" },
};

export const creatingObjectSlice = createSlice({
  name: "creatingObject",
  initialState,
  reducers: {
    setObject: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setObject } = creatingObjectSlice.actions;
export default creatingObjectSlice.reducer;
