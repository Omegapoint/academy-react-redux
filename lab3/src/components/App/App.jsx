import React from "react";
import Container from "../Container/Container";
import { Provider } from "react-redux";
import configureStore from "../../store";

import "./App.css";

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
