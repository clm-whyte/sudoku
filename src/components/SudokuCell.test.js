/// <reference types="jest" />
import React from "react";
import { shallow } from "enzyme";
import SudokuCell from "./SudokuCell";

describe("Cell borders", () => {
  const gridTopLeft = shallow(<SudokuCell row="0" col="0" />);
  const gridTopRight = shallow(<SudokuCell row="0" col="8" />);
  const gridBotLeft = shallow(<SudokuCell row="8" col="0" />);
  const gridBotRight = shallow(<SudokuCell row="8" col="8" />);

  it("should match the snapshot", () => {
    expect(gridTopLeft).toMatchSnapshot();
  });

  it("asserts that the cell in the top left should have a thick border on the top and left", () => {
    expect(gridTopLeft.html()).toContain("boxBoundaryLeft", "boxBoundaryTop");
  });

  it("asserts that the cell in the top right should have a thick border on the top and right", () => {
    expect(gridTopRight.html()).toContain("boxBoundaryRight", "boxBoundaryTop");
  });

  it("asserts that the cell in the bottom left should have a thick border on the bottom and left", () => {
    expect(gridBotLeft.html()).toContain(
      "boxBoundaryLeft",
      "boxBoundaryBottom"
    );
  });

  it("asserts that the cell in the top right should have a thick border on the top and right", () => {
    expect(gridBotRight.html()).toContain(
      "boxBoundaryRight",
      "boxBoundaryBottom"
    );
  });
});
