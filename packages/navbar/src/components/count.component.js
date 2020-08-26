import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "@mallone/react-styleguide";
import { increment, decrement } from "@mallone/state-management";

export default function Count(props) {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <section>
      <Title>
        Contador com redux: <span>{count}</span>
      </Title>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </section>
  );
}
