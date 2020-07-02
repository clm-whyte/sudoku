import React from "react";
import { action } from "@storybook/addon-actions";
import { number, boolean } from "@storybook/addon-knobs";

import mdx from "./SudokuCell.mdx";

import SudokuCell from "./SudokuCell";

export default {
  component: SudokuCell,
  title: "Cell",
  excludeStories: /.*Data$/,
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
  className: "cell",
  selected: false,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Cell = () => {
  return (
    <div>
      <SudokuCell
        {...cellData}
        value={number("Value", null)}
        row={number("Row", 1)}
        col={number("Column", 1)}
        selected={boolean("Selected", false)}
        {...actionsData}
      />
    </div>
  );
};

export const Empty = () => {
  return <SudokuCell {...cellData} {...actionsData} />;
};

export const Filled = () => (
  <SudokuCell
    {...cellData}
    value={number("Value", 1)}
    {...actionsData}
  ></SudokuCell>
);

export const OuterCorner = () => {
  return (
    <div>
      <SudokuCell {...cellData} row={0} col={0} {...actionsData} />
    </div>
  );
};

export const InnerCorner = () => {
  return (
    <div>
      <SudokuCell {...cellData} row={2} col={2} {...actionsData} />
    </div>
  );
};

export const Selected = () => {
  return (
    <div>
      <SudokuCell {...cellData} selected={true} {...actionsData} />
    </div>
  );
};
