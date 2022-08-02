import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const multiplySlice = createSlice({
  name: "multiplyCounter",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { incrementByAmount, decrementByAmount } = multiplySlice.actions;
export default multiplySlice.reducer;
