import React from "react";
import singleSpa from "single-spa";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@mallone/state-management";
import VanillaComponent from "./vanilla-js.component";
import Parcel from "./parcel.component";

export default function Count() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>
        Contador com redux: <span>{counter}</span>
      </h2>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button
        onClick={() => singleSpa.navigateToUrl("/single-spa-hello/vue-app")}
      >
        vue-app
      </button>

      <Parcel component={VanillaComponent} counter={counter} />
    </section>
  );
}
