import React from "react";
import { render } from "@testing-library/react";
import Game from "./Game";

test("renders learn react link", () => {
  const { getByTestId } = render(<Game />);
  const grid = getByTestId("grid");
  expect(grid).toBeInTheDocument();
});
