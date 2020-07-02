import React from "react";

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

export const Grid = () => {
  return <SudokuGrid />;
};
