import React from "react";
import Grid from "./components/Grid";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-grid">
          <Grid />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
