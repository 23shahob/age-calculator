import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      return {
        ...state,
        value: state.value - action.payload,
      };
    },
  },
});
export default CounterSlice.reducer;
export const { increment, incrementByAmount, decrementByAmount } =
  CounterSlice.actions;
