import React from "react";
import singleSpa from "single-spa";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@mallone/state-management";

export default function Count(props) {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>
        Contador com redux: <span>{count}</span>
      </h2>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => singleSpa.navigateToUrl("/vue-app")}>
        vue-app
      </button>
    </section>
  );
}
