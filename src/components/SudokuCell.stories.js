import React from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { number, boolean } from "@storybook/addon-knobs";

import mdx from "./SudokuCell.mdx";

import SudokuCell from "./SudokuCell";

export default {
  component: SudokuCell,
  title: "Cell",

  excludeStories: /.*Data$/,
  decorators: [withA11y],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const cellData = {
  cellID: 1,
  value: null,
  row: 1,
  col: 1,
  className: "sudokuCell",
  selected: false,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Cell = () => {
  return (
    <SudokuCell
      {...cellData}
      value={number("Value", null)}
      row={number("Row", 1)}
      col={number("Column", 1)}
      selected={boolean("Selected", false)}
      {...actionsData}
    />
  );
};

export const Empty = () => {
  return <SudokuCell {...cellData} {...actionsData} />;
};

export const Filled = () => (
  <SudokuCell {...cellData} value={number("Value", 1)} {...actionsData} />
);

export const OuterCorner = () => {
  return <SudokuCell {...cellData} row={0} col={0} {...actionsData} />;
};

export const InnerCorner = () => {
  return <SudokuCell {...cellData} row={2} col={2} {...actionsData} />;
};

export const Selected = () => {
  return <SudokuCell {...cellData} selected={true} {...actionsData} />;
};

export const Cursor = () => {
  return <SudokuCell {...cellData} cursor={true} {...actionsData} />;
};

export const CursorAndSelected = () => {
  return (
    <SudokuCell {...cellData} cursor={true} selected={true} {...actionsData} />
  );
};
