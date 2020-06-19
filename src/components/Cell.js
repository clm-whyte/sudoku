import React from "react";

export default function Cell(props) {
  return (
    <button
      aria-label={props.cellID}
      data-test={props.cellID}
      className="cell"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
