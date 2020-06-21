import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";

import MaterialCell from "./MaterialCell";

export default {
  component: MaterialCell,
  title: "Material Cell",
  decorators: [withKnobs, withA11y],
  excludeStories: /.*Data$/,
};

export const cellData = {
  cellID: 1,
  value: 1,
  row: 1,
  col: 1,
  className: "cell",
  // style: {
  //   maxWidth: "34px",
  //   maxHeight: "34px",
  //   minWidth: "34px",
  //   minHeight: "34px",
  //   borderRadius: 0,
  // },
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Empty = () => {
  return <MaterialCell {...cellData} value={null} {...actionsData} />;
};

export const ElementFilled = () => (
  <MaterialCell
    {...cellData}
    value={number("Value", 1)}
    {...actionsData}
  ></MaterialCell>
);

export const SideBySide = () => {
  return (
    <div>
      <MaterialCell {...cellData} value={null} {...actionsData} />
      <MaterialCell {...cellData} value={null} {...actionsData} />
    </div>
  );
};
