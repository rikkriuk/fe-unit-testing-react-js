import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/slices/counterSlice";

const CounterButton = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default CounterButton;
