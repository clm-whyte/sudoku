import React from "react";

import Grid from "./components/Grid";

import "./index.scss";
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="grid">
          <Grid />
        </div>
      </div>
    );
  }
}
export default Game;
