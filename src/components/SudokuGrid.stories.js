import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";

import mdx from "./SudokuGrid.mdx";

import SudokuGrid from "./SudokuGrid";

export default {
  component: SudokuGrid,
  title: "Grid",
  decorators: [withKnobs, withA11y],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const gridData = {
  value: 1,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Empty = () => {
  return <SudokuGrid {...actionsData} />;
};
