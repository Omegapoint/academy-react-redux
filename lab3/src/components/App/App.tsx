import React from "react";
import Container from "../Container/Container";
import { Provider } from "react-redux";
import store from "../../store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
