import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import {
  enterDigit,
  ADDITION,
  CLEAR,
  DIVISION,
  MULTIPLICATION,
  SUBTRACTION,
  RESULT,
} from "./redux/calcSlice";
const Displaycalc = () => {
  let state = useSelector((initialState) => {
    return initialState.calc;
  });
  let dispatch = useDispatch();
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden max-w-[300px]">
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div className="w-full py-5 px-6 text-6xl text-white font-thin">
            {console.log(state)}
            {state.result}
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="clear"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                onClick={() => dispatch(CLEAR())}
              >
                C
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value=""
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                +/-
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="%"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
              >
                %
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="/"
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light"
                onClick={() => dispatch(DIVISION())}
              >
                ÷
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="7"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("7"))}
              >
                7
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="8"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("8"))}
              >
                8
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="9"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("9"))}
              >
                9
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="*"
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(MULTIPLICATION())}
              >
                ⨉
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="4"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("4"))}
              >
                4
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="5"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("5"))}
              >
                5
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="6"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("6"))}
              >
                6
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="-"
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(SUBTRACTION())}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="1"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("1"))}
              >
                1
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="2"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("2"))}
              >
                2
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="3"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("3"))}
              >
                3
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                type="button"
                value="+"
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(ADDITION())}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-indigo-400">
              <button
                type="button"
                value="0"
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch(enterDigit("0"))}
              >
                0
              </button>
            </div>
            <div className="w-1/4 border-r border-indigo-400">
              <button
                type="button"
                value="."
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              >
                .
              </button>
            </div>
            <div className="w-2/4 border-r border-indigo-400">
              <button
                type="button"
                value="="
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
                onClick={() => dispatch(RESULT())}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displaycalc;
