import React from "react";
import { Provider } from "react-redux";
import { store } from "@mallone/state-management";
import Count from "./components/count.component";

export default function Root(props) {
  return (
    <Provider store={store}>
      {props.name} is mounted!
      <Count />
    </Provider>
  );
}
