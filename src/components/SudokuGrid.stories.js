import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import mdx from "./SudokuGrid.mdx";

import SudokuGrid from "./SudokuGrid";

export default {
  component: SudokuGrid,
  title: "Grid",
  excludeStories: /.*Data$/,
  decorators: [withA11y],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Grid = () => {
  return <SudokuGrid />;
};
