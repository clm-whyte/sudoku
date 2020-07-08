/// <reference types="jest" />
import React from "react";
import { mount } from "enzyme";
import SudokuGrid from "./SudokuGrid";
import SudokuCell from "./SudokuCell";

function emptyGrid() {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid.push(Array(9).fill({ value: null, selected: false, cursor: false }));
  }
  grid[0][0] = { value: null, selected: false, cursor: true };
  return grid;
}

describe("Clicking on the grid", () => {
  it("clicks on multiple cells on the same row one after the other", () => {
    const gridBefore = emptyGrid();
    const gridAfter = gridBefore.slice();
    gridAfter[0] = [
      { value: 0, selected: false, cursor: false },
      { value: 1, selected: false, cursor: false },
      { value: 2, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: 8, selected: true, cursor: true },
    ];

    const sudokuGrid = mount(<SudokuGrid state={gridBefore} />);
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
    sudokuGrid.unmount();
  });

  it("clicks on a cell and then CTRL + Clicks two more", () => {
    const gridBefore = emptyGrid();
    const gridAfter = gridBefore.slice();
    gridAfter[0] = [
      { value: 0, selected: true, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: 8, selected: true, cursor: false },
    ];
    gridAfter[8] = [
      { value: 72, selected: true, cursor: true },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
    ];

    const sudokuGrid = mount(<SudokuGrid state={gridBefore} />);
    const cell0 = sudokuGrid.find(SudokuCell).at(0);
    const cell8 = sudokuGrid.find(SudokuCell).at(8);
    const cell72 = sudokuGrid.find(SudokuCell).at(72);

    expect(sudokuGrid.state().cells).toEqual(gridBefore);

    cell0.simulate("click");
    cell8.simulate("click", { ctrlKey: true });
    cell72.simulate("click", { ctrlKey: true });

    expect(sudokuGrid.state().cells).toEqual(gridAfter);
    sudokuGrid.unmount();
  });

  it("clicks on a cell and then SHIFT + Clicks two more on the same row", () => {
    const gridBefore = emptyGrid();
    const gridZeroToFour = gridBefore.slice();
    gridZeroToFour[0] = [
      { value: 0, selected: true, cursor: true },
      { value: null, selected: true, cursor: false },
      { value: null, selected: true, cursor: false },
      { value: null, selected: true, cursor: false },
      { value: 4, selected: true, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
      { value: null, selected: false, cursor: false },
    ];
    const gridZeroToEight = gridBefore.slice();
    gridZeroToEight[0] = [
      { value: 0, selected: true, cursor: true },
      { value: null, selected: true, cursor: false },
      { value: null, selected: true, cursor: false },
      { value: null, selected: true, cursor: false },
      { value: 4, selected: true, cursor: false },
      { value: null, selected: true, cursor: false },
      { value: null, selected: true, cursor: false },
      { value: null, selected: true, cursor: false },
      { value: 8, selected: true, cursor: false },
    ];

    const sudokuGrid = mount(<SudokuGrid state={gridBefore} />);
    const cell0 = sudokuGrid.find(SudokuCell).at(0);
    const cell4 = sudokuGrid.find(SudokuCell).at(4);
    const cell8 = sudokuGrid.find(SudokuCell).at(8);

    expect(sudokuGrid.state().cells).toEqual(gridBefore);

    cell0.simulate("click");
    cell4.simulate("click", { shiftKey: true });
    expect(sudokuGrid.state().cells).toEqual(gridZeroToFour);

    cell8.simulate("click", { shiftKey: true });
    expect(sudokuGrid.state().cells).toEqual(gridZeroToEight);

    sudokuGrid.unmount();
  });
});
