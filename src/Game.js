import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import Grid from "./components/Grid";

import "./index.scss";
class Game extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="game">
          <div className="grid">
            <Grid />
          </div>
        </div>
      </Provider>
    );
  }
}
export default Game;
