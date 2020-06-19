import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";

import Cell from "./Cell";

export default {
  component: Cell,
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
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Empty = () => {
  return <Cell {...cellData} value={null} {...actionsData} />;
};

export const ElementFilled = () => (
  <Cell {...cellData} value={number("Value", 1)} {...actionsData}></Cell>
);
