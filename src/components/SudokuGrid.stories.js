import React from "react";
import { action } from "@storybook/addon-actions";

import mdx from "./SudokuGrid.mdx";

import SudokuGrid from "./SudokuGrid";

export default {
  component: SudokuGrid,
  title: "Grid",
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
