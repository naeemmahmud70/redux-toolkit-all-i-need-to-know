import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
};

export const toggleSlice = createSlice({
  name: "toggleStatus",
  initialState,
  reducers: {
    active: (state) => {
      state.status = true;
    },
    inactive: (state) => {
      state.status = false;
    },
  },
});

export const { active, inactive } = toggleSlice.actions;
export default toggleSlice.reducer;
