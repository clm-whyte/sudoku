import React from "react";

export default function SudokuCell(props) {
  return (
    <button
      aria-label={props.cellID}
      data-test={props.cellID}
      className={`${props.className}
      ${props.row % 3 === 0 ? "box-border-top" : ""}
      ${props.col % 3 === 0 ? "box-border-left" : ""}
      ${props.row === 8 ? "box-border-bottom" : ""}
      ${props.col === 8 ? "box-border-right" : ""} `}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
