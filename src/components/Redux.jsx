import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../redux/CounterSlice";

const Redux = () => {
  const counter = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">Count is equal: {counter}</h1>
      <div className="space-x-2">
        <button
          onClick={() => dispatch(increment())}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(4))}
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          +4 by amount
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(4))}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          -4 by amount
        </button>
      </div>
    </div>
  );
};

export default Redux;
