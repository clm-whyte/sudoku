/// <reference types="jest" />
import React from "react";
import { shallow } from "enzyme";
import SudokuCell from "./SudokuCell";

describe("rendering different borders dependant on location", () => {
  it("cell in top left has thick border on top and left", () => {
    const cell = shallow(<SudokuCell row="0" col="0" />);
    expect(cell.html()).toContain("boxBoundaryLeft", "boxBoundaryTop");
    cell.unmount();
  });

  it("cell in top right has thick border on top and right", () => {
    const cell = shallow(<SudokuCell row="0" col="8" />);
    expect(cell.html()).toContain("boxBoundaryRight", "boxBoundaryTop");
    cell.unmount();
  });

  it("cell in bottom left has thick border on bottom and left", () => {
    const cell = shallow(<SudokuCell row="8" col="0" />);
    expect(cell.html()).toContain("boxBoundaryLeft", "boxBoundaryBottom");
    cell.unmount();
  });

  it("cell top right has thick border on top and right", () => {
    const cell = shallow(<SudokuCell row="8" col="8" />);
    expect(cell.html()).toContain("boxBoundaryRight", "boxBoundaryBottom");
    cell.unmount();
  });
});

describe("passing props to cell", () => {
  it("prop 'selected=true' renders class 'selected'", () => {
    const cell = shallow(<SudokuCell selected="true" />);
    expect(cell.html()).toContain("selected");
    cell.unmount();
  });

  it("prop 'cursor=true' renders class 'cursor'", () => {
    const cell = shallow(<SudokuCell cursor="true" />);
    expect(cell.html()).toContain("cursor");
    cell.unmount();
  });

  it("prop 'cursor=true' and 'selected=true' renders both 'cursor' and 'selected'", () => {
    const cell = shallow(<SudokuCell cursor="true" selected="true" />);
    expect(cell.html()).toContain("cursor", "selected");
    cell.unmount();
  });
});
