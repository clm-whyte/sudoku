import React from "react";
import SudokuCell from "./SudokuCell";
import Grid from "@material-ui/core/Grid";

class SudokuGrid extends React.Component {
  constructor(props) {
    super(props);
    let grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(Array(9).fill({ value: null, selected: false }));
    }
    this.state = { cells: grid };
  }

  deselectCells(index) {
    if (index.selected === true) {
      index.selected = false;
    }
  }

  handleClick(row, col) {
    const cells = this.state.cells.slice();
    cells[row][col] = { value: cells[row].length * row + col, selected: true };
    this.setState({ cells });
  }

  renderCell(row, col) {
    return (
      <SudokuCell
        value={this.state.cells[row][col].value}
        selected={this.state.cells[row][col].selected}
        key={this.state.cells[row].length * row + col}
        cellID={`cell-${row}/${col}`}
        onClick={() => this.handleClick(row, col)}
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
      <Grid className="grid" data-test="grid">
        {grid}
      </Grid>
    );
  }
}

export default SudokuGrid;
