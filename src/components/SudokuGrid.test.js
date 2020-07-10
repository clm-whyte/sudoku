/// <reference types="jest" />
import React from "react";
import { mount } from "enzyme";
import SudokuGrid from "./SudokuGrid";
import SudokuCell from "./SudokuCell";

const emptyGrid = () => {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push(Array(9).fill({ value: null, selected: false }));
  }
  return grid;
};

describe("Clicking on the grid", () => {
  it("clicks on multiple cells on the same row one after the other", () => {
    const gridAfter = emptyGrid();
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

    const sudokuGrid = mount(<SudokuGrid />);
    const cell0 = sudokuGrid.find(SudokuCell).at(0);
    const cell1 = sudokuGrid.find(SudokuCell).at(1);
    const cell2 = sudokuGrid.find(SudokuCell).at(2);
    const cell8 = sudokuGrid.find(SudokuCell).at(8);

    expect(sudokuGrid.state().cells).toEqual(emptyGrid());
    expect(sudokuGrid.state().cursorLocation).toEqual({ row: 0, col: 0 });

    cell0.simulate("click");
    cell1.simulate("click");
    cell2.simulate("click");
    cell8.simulate("click");

    expect(sudokuGrid.state().cells).toEqual(gridAfter);
    expect(sudokuGrid.state().cursorLocation).toEqual({ row: 0, col: 8 });
    sudokuGrid.unmount();
  });

  it("clicks on a cell and then CTRL + Clicks two more", () => {
    const gridAfter = emptyGrid();
    gridAfter[0] = [
      { value: 0, selected: true },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: 8, selected: true },
    ];
    gridAfter[8] = [
      { value: 72, selected: true },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
    ];

    const sudokuGrid = mount(<SudokuGrid />);
    const cell0 = sudokuGrid.find(SudokuCell).at(0);
    const cell8 = sudokuGrid.find(SudokuCell).at(8);
    const cell72 = sudokuGrid.find(SudokuCell).at(72);

    expect(sudokuGrid.state().cells).toEqual(emptyGrid());
    expect(sudokuGrid.state().cursorLocation).toEqual({ row: 0, col: 0 });

    cell0.simulate("click");
    cell8.simulate("click", { ctrlKey: true });
    cell72.simulate("click", { ctrlKey: true });

    expect(sudokuGrid.state().cells).toEqual(gridAfter);
    expect(sudokuGrid.state().cursorLocation).toEqual({ row: 8, col: 0 });

    sudokuGrid.unmount();
  });

  it("clicks on a cell and then SHIFT + Clicks two more on the same row", () => {
    const gridZeroToFour = emptyGrid();
    gridZeroToFour[0] = [
      { value: 0, selected: true },
      { value: null, selected: true },
      { value: null, selected: true },
      { value: null, selected: true },
      { value: 4, selected: true },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
      { value: null, selected: false },
    ];
    const gridZeroToEight = emptyGrid();
    gridZeroToEight[0] = [
      { value: 0, selected: true },
      { value: null, selected: true },
      { value: null, selected: true },
      { value: null, selected: true },
      { value: 4, selected: true },
      { value: null, selected: true },
      { value: null, selected: true },
      { value: null, selected: true },
      { value: 8, selected: true },
    ];

    const sudokuGrid = mount(<SudokuGrid />);
    const cell0 = sudokuGrid.find(SudokuCell).at(0);
    const cell4 = sudokuGrid.find(SudokuCell).at(4);
    const cell8 = sudokuGrid.find(SudokuCell).at(8);

    expect(sudokuGrid.state().cells).toEqual(emptyGrid());
    expect(sudokuGrid.state().cursorLocation).toEqual({ row: 0, col: 0 });

    cell0.simulate("click");
    cell4.simulate("click", { shiftKey: true });

    expect(sudokuGrid.state().cursorLocation).toEqual({ row: 0, col: 0 });

    cell8.simulate("click", { shiftKey: true });

    expect(sudokuGrid.state().cursorLocation).toEqual({ row: 0, col: 0 });

    sudokuGrid.unmount();
  });
});
