import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    let grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(Array(9).fill(null));
    }
    this.state = { cells: grid };
  }

  handleClick(row, col) {
    const cells = this.state.cells.slice();
    cells[row][col] = cells[row].length * row + col;
    this.setState({ cells });
  }

  renderCell(row, col) {
    return (
      <Cell
        value={this.state.cells[row][col]}
        key={this.state.cells[row].length * row + col}
        cellID={`cell-${row}/${col}`}
        onClick={() => this.handleClick(row, col)}
        className={"cell"}
        row={row}
        col={col}
      />
    );
  }

  render() {
    let grid = [];
    for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
      let row = [];
      for (let colNumber = 0; colNumber < 9; colNumber++) {
        row.push(this.renderCell(rowNumber, colNumber));
      }
      grid.push(
        <div
          data-test={`row-${rowNumber}`}
          key={"row" + rowNumber}
          className="grid-row"
        >
          {row}
        </div>
      );
    }
    return (
      <div data-test="grid" className="grid">
        {grid}
      </div>
    );
  }
}

export default Grid;
