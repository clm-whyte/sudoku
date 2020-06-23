import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";

import SudokuCell from "./SudokuCell";

export default {
  component: SudokuCell,
  title: "Cell",
  decorators: [withKnobs, withA11y],
  excludeStories: /.*Data$/,
};

export const cellData = {
  cellID: 1,
  value: 1,
  row: 1,
  col: 1,
  className: "cell",
  selected: false,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Empty = () => {
  return <SudokuCell {...cellData} value={null} {...actionsData} />;
};

export const ElementFilled = () => (
  <SudokuCell
    {...cellData}
    value={number("Value", 1)}
    row={number("Row", 1)}
    col={number("Column", 1)}
    {...actionsData}
  ></SudokuCell>
);

export const SideBySide = () => {
  return (
    <div>
      <SudokuCell {...cellData} value={null} {...actionsData} />
      <SudokuCell {...cellData} value={null} {...actionsData} />
    </div>
  );
};

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
