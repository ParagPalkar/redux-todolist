import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Todo from "./Todo";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
