import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";

import Grid from "./Grid";

export default {
  component: Grid,
  title: "Grid",
  decorators: [withKnobs, withA11y],
  excludeStories: /.*Data$/,
};

export const gridData = {
  value: 1,
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Empty = () => {
  return <Grid {...actionsData} />;
};
