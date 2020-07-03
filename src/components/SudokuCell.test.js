/// <reference types="jest" />
import React from "react";
import { shallow } from "enzyme";
import SudokuCell from "./SudokuCell";

test("test shallow render of Sudoku Cell", () => {
  const sudokuCell = shallow(<SudokuCell />);
  sudokuCell.unmount();
});
