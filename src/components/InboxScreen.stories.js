import React from "react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import { withA11y } from "@storybook/addon-a11y";

import { PureInboxScreen } from "./InboxScreen";
import { defaultTasksData } from "./TaskList.stories";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [
    (story) => <Provider store={store}>{story()}</Provider>,
    withA11y,
  ],
};

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasksData,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
