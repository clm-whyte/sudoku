/// <reference types="jest" />

import React from "react";

import { shallow } from "enzyme";

import App from "./App";
import Game from "./Game";
import SudokuGrid from "./components/SudokuGrid";
import SudokuCell from "./components/SudokuCell";

function emptyGrid() {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push(Array(9).fill({ value: null, selected: false }));
  }
  return grid;
}

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

test("test shallow render of Sudoku Grid", () => {
  const grid = emptyGrid();

  const sudokuGrid = shallow(<SudokuGrid state={grid} />);
  expect(sudokuGrid).toMatchSnapshot();
  sudokuGrid.unmount();
});

test("test state change of Sudoku Grid", () => {
  const empty = emptyGrid();

  const selected = empty.slice();
  selected[0] = selected[0].map((cell, index) => {
    if (index === 0) {
      return (cell = { value: 0, selected: true });
    }
    return cell;
  });

  const sudokuGrid = shallow(<SudokuGrid state={empty} />);
  const cell = sudokuGrid.find(SudokuCell).at(0);

  expect(sudokuGrid.state().cells).toEqual(empty);
  cell.simulate("click");
  expect(sudokuGrid.state().cells).toEqual(selected);
  sudokuGrid.instance().deselectAllCells();
  expect(sudokuGrid.state().cells).toEqual(empty);
  sudokuGrid.unmount();
});
