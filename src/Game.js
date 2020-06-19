import React from "react";

import Grid from "./components/Grid";

import "./index.scss";
class Game extends React.Component {
  render() {
    return (
      <div role="main" className="game">
        <h1>$ sudo --ku</h1>
        <Grid />
      </div>
    );
  }
}
export default Game;
