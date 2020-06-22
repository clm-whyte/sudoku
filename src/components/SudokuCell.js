import React from "react";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";

export default function SudokuCell(props) {
  return (
    <StylesProvider injectFirst>
      <Button
        variant="outlined"
        aria-label={props.cellID}
        data-test={props.cellID}
        onClick={props.onClick}
        className={`sudokuCell
        ${props.row % 3 === 0 ? "boxBoundaryTop" : ""}
        ${props.row === 8 ? "boxBoundaryBottom" : ""}
        ${props.col % 3 === 0 ? "boxBoundaryLeft" : ""}
        ${props.col === 8 ? "boxBoundaryRight" : ""}
        `}
      >
        {props.value}
      </Button>
    </StylesProvider>
  );
}
