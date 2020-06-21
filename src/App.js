import React from "react";
import Game from "./Game";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <TypoGraphy variant="h4" component="h1" color="inherit">
              Sudoku
            </TypoGraphy>
          </Toolbar>
        </AppBar>
        <Game />
      </div>
    );
  }
}

export default App;
