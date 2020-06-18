import React from "react";

import Grid from "./components/Grid";

import "./index.scss";
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Grid />
      </div>
    );
  }
}
export default Game;
