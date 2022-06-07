import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    result: "",
    leftValue: "",
    operation: "",
    rightValue: "",
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
        if (state.rightValue === "") {
          state.rightValue = parseInt(action.payload);
        } else {
          state.rightValue = parseInt(state.rightValue + action.payload);
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
          state.result = state.leftValue + state.rightValue;
          break;
        case "-":
          state.result = state.leftValue - state.rightValue;
          break;
        case "*":
          state.result = state.leftValue * state.rightValue;
          break;
        case "/":
          state.result = state.leftValue / state.rightValue;
          break;
        default:
          break;
      }
    },
    CLEAR: (state) => {
      state.result = "";
      state.leftValue = "";
      state.operation = "";
      state.rightValue = "";
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
