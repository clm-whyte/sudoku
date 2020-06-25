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

test("after clicking multiple cells on the same row one after the other, clicked cells are numbered and only the last cell is highlighted", () => {
  const gridBefore = emptyGrid();
  const gridAfter = gridBefore.slice();
  gridAfter[0] = [
    { value: 0, selected: false },
    { value: 1, selected: false },
    { value: 2, selected: false },
    { value: null, selected: false },
    { value: null, selected: false },
    { value: null, selected: false },
    { value: null, selected: false },
    { value: null, selected: false },
    { value: 8, selected: true },
  ];

  const sudokuGrid = shallow(<SudokuGrid state={gridBefore} />);
  const cell0 = sudokuGrid.find(SudokuCell).at(0);
  const cell1 = sudokuGrid.find(SudokuCell).at(1);
  const cell2 = sudokuGrid.find(SudokuCell).at(2);
  const cell8 = sudokuGrid.find(SudokuCell).at(8);

  expect(sudokuGrid.state().cells).toEqual(gridBefore);

  cell0.simulate("click");
  cell1.simulate("click");
  cell2.simulate("click");
  cell8.simulate("click");

  expect(sudokuGrid.state().cells).toEqual(gridAfter);
});
