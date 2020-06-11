import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import Cell from "./components/Cell";

import "./index.scss";
function App() {
  return (
    <Provider store={store}>
      <Cell />
    </Provider>
  );
}
export default App;
