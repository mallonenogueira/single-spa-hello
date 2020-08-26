import "./set-public-path";

import { createStore, combineReducers } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

function getStore(reducers) {
  if (!getStore.instance) getStore.instance = createStore(reducers);

  return getStore.instance;
}

const store = getStore(
  combineReducers({
    counter,
  })
);

export { store, increment, decrement };
