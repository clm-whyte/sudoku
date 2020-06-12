import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";

import Cell from "./Cell";

export default {
  component: Cell,
  title: "Cell",
  decorators: [withKnobs, withA11y],
  excludeStories: /.*Data$/,
};

export const cellData = {
  id: "1",
  value: 1,
  state: "1",
  isSelected: false,
};

export const actionsData = {
  onSelectCell: action("onSelectCell"),
  onEnterDigit: action("onEnterDigit"),
};

export const Empty = () => {
  return <Cell cell={object("cell", { ...cellData })} {...actionsData} />;
};
