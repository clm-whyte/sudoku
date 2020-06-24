import React from "react";
import { render } from "@testing-library/react";
import Game from "./Game";

test("check that grid exists", () => {
  const { getByTestId } = render(<Game />);
  const grid = getByTestId("grid");
  expect(grid).toBeInTheDocument();
});

test("when multiple cells are selected, deselect all cells at once", () => {
  let allSelected = [];
  for (let i = 0; i < 9; i++) {
    allSelected.push(Array(9).fill({ selected: true }));
  }

  const noneSelected = [];
  for (let i = 0; i < 9; i++) {
    noneSelected.push(Array(9).fill({ selected: false }));
  }

  function deselectCells(index) {
    if (index.selected === true) {
      index.selected = false;
    }
  }

  for (let row = 0; row < allSelected.length; row++) {
    allSelected[row].forEach(deselectCells);
  }

  expect(allSelected).toEqual(noneSelected);
});
