/// <reference types="jest" />
import React from "react";
import { shallow } from "enzyme";
import SudokuCell from "./SudokuCell";

describe("Cell borders", () => {
  it("asserts that the cell in the top left should have a thick border on the top and left", () => {
    const cell = shallow(<SudokuCell row="0" col="0" />);
    expect(cell.html()).toContain("boxBoundaryLeft", "boxBoundaryTop");
    cell.unmount();
  });

  it("asserts that the cell in the top right should have a thick border on the top and right", () => {
    const cell = shallow(<SudokuCell row="0" col="8" />);
    expect(cell.html()).toContain("boxBoundaryRight", "boxBoundaryTop");
    cell.unmount();
  });

  it("asserts that the cell in the bottom left should have a thick border on the bottom and left", () => {
    const cell = shallow(<SudokuCell row="8" col="0" />);
    expect(cell.html()).toContain("boxBoundaryLeft", "boxBoundaryBottom");
    cell.unmount();
  });

  it("asserts that the cell in the top right should have a thick border on the top and right", () => {
    const cell = shallow(<SudokuCell row="8" col="8" />);
    expect(cell.html()).toContain("boxBoundaryRight", "boxBoundaryBottom");
    cell.unmount();
  });
});
