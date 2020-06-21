import React from "react";
import Button from "@material-ui/core/Button";

export default function SudokuCell(props) {
  const cellSize = "34px";
  const cellBorder = "1px solid rgba(0, 0, 0, 0.23)";
  const boxBorder = "2px solid black";

  return (
    <Button
      variant="outlined"
      style={{
        maxWidth: `${cellSize}`,
        maxHeight: `${cellSize}`,
        minWidth: `${cellSize}`,
        minHeight: `${cellSize}`,
        border: `${cellBorder}`,
        borderRadius: 0,
        borderTop: `${props.row % 3 === 0 ? `${boxBorder}` : `${cellBorder}`}`,
        borderBottom: `${props.row === 8 ? `${boxBorder}` : `${cellBorder}`}`,
        borderLeft: `${props.col % 3 === 0 ? `${boxBorder}` : `${cellBorder}`}`,
        borderRight: `${props.col === 8 ? `${boxBorder}` : `${cellBorder}`}`,
      }}
      aria-label={props.cellID}
      data-test={props.cellID}
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}
