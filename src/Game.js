import React from "react";
import SudokuGrid from "./components/SudokuGrid";

import "./index.scss";
class Game extends React.Component {
  render() {
    return (
      <div role="main">
        <SudokuGrid />
      </div>
    );
  }
}
export default Game;
