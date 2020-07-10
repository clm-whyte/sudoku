/// <reference types="jest" />
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Game from "./Game";
import SudokuGrid from "./components/SudokuGrid";

test("verify that app contains game", () => {
  const app = shallow(<App />);
  const game = <Game />;
  expect(app).toContainReact(game);
  app.unmount();
});

test("verify that game contains grid", () => {
  const game = shallow(<Game />);
  const grid = <SudokuGrid />;
  expect(game).toContainReact(grid);
  game.unmount();
});
