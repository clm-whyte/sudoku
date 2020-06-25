/// <reference types="jest" />

import React from "react";

import { shallow, mount } from "enzyme";

import App from "./App";
import Game from "./Game";
import SudokuGrid from "./components/SudokuGrid";
import SudokuCell from "./components/SudokuCell";

test("verify that app contains game", () => {
  const app = shallow(<App />);
  const game = <Game />;
  expect(app).toContainReact(game);
});

test("verify that game contains grid", () => {
  const game = shallow(<Game />);
  const grid = <SudokuGrid />;
  expect(game).toContainReact(grid);
});

test("test shallow render of Sudoku Grid", () => {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push(Array(9).fill({ value: null, selected: false }));
  }

  const sudokuGrid = shallow(<SudokuGrid state={grid} />);
  expect(sudokuGrid).toMatchSnapshot();
  sudokuGrid.unmount();
});

test("test state change of Sudoku Grid", () => {
  // set 9x9 empty grid
  const empty = [];
  for (let i = 0; i < 9; i++) {
    empty.push(Array(9).fill({ value: null, selected: false }));
  }

  // set 9x9 grid with first cell selected
  const selected = empty.slice();
  selected[0] = selected[0].map((cell, index) => {
    if (index === 0) {
      return (cell = { selected: true, value: 0 });
    }
    return cell;
  });

  const sudokuGrid = mount(<SudokuGrid state={empty} />);
  const cell = sudokuGrid.find(SudokuCell).at(0);

  expect(sudokuGrid.state().cells).toEqual(empty);
  cell.simulate("click");
  expect(sudokuGrid.state().cells).toEqual(selected);
  sudokuGrid.unmount();
});
