import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    result: 0,
    leftValue: "",
    operation: "",
    rightVlaue: "",
  },
  reducers: {
    enterDigit: (state, action) => {
      if (state.operation === "") {
        if (state.leftValue === "") {
          state.leftValue = parseInt(action.payload);
        } else {
          state.leftValue = parseInt(state.leftValue + action.payload);
        }
      } else {
        if (state.rightVlaue === "") {
          state.rightVlaue = parseInt(action.payload);
        } else {
          state.rightVlaue = parseInt(state.rightVlaue + action.payload);
        }
      }
    },
    ADDITION: (state) => {
      state.operation = "+";
    },
    SUBTRACTION: (state) => {
      state.operation = "-";
    },
    MULTIPLICATION: (state) => {
      state.operation = "*";
    },
    DIVISION: (state) => {
      state.operation = "/";
    },
    RESULT: (state) => {
      switch (state.operation) {
        case "+":
          state.result = state.leftValue + state.rightVlaue;
          break;
        case "-":
          state.result = state.leftValue - state.rightVlaue;
          break;
        case "*":
          state.result = state.leftValue * state.rightVlaue;
          break;
        case "/":
          state.result = state.leftValue / state.rightVlaue;
          break;
        default:
          break;
      }
    },
    CLEAR: (state) => {
      state.result = 0;
      state.leftValue = "";
      state.operation = "";
      state.rightVlaue = "";
    },
  },
});
export const {
  enterDigit,
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
  CLEAR,
  RESULT,
} = calcSlice.actions;

export default calcSlice.reducer;
