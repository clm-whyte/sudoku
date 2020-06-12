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
  value: 1,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Empty = () => {
  return <Cell {...actionsData} />;
};

export const ElementFilled = () => (
  <Cell value={number("Value", 1)} {...actionsData}></Cell>
);
