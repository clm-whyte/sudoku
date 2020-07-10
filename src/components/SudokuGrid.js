import React from "react";
import SudokuCell from "./SudokuCell";
import Grid from "@material-ui/core/Grid";

class SudokuGrid extends React.Component {
  constructor(props) {
    super(props);
    const grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(Array(9).fill({ value: null, selected: false }));
    }
    this.state = { cells: grid, cursorLocation: { row: 0, col: 0 } };
  }

  deselectAllCells() {
    const cells = this.state.cells.slice();
    for (let i = 0; i < 9; i++) {
      cells[i] = cells[i].map((cell) => {
        cell.selected = false;
        return cell;
      });
    }
    this.setState({ cells });
  }

  moveCursor(newRow, newCol) {
    const cursorLocation = this.state.cursorLocation;
    cursorLocation.row = newRow;
    cursorLocation.col = newCol;
    this.setState({ cursorLocation });
  }

  setValue(row, col) {
    const cells = this.state.cells.slice();
    cells[row][col] = {
      value: cells[row].length * row + col,
      selected: cells[row][col].selected,
    };
    this.setState({ cells });
  }

  selectCell(row, col) {
    const cells = this.state.cells.slice();
    cells[row][col] = {
      value: cells[row][col].value,
      selected: true,
    };
    this.setState({ cells });
  }

  handleClick(row, col, e) {
    if (!e.ctrlKey) {
      this.deselectAllCells();
    }
    if (!e.shiftKey) {
      this.moveCursor(row, col);
    }
    this.setValue(row, col);
    this.selectCell(row, col);
  }

  renderCell(row, col) {
    return (
      <SudokuCell
        value={this.state.cells[row][col].value}
        selected={this.state.cells[row][col].selected}
        cursor={
          row === this.state.cursorLocation.row &&
          col === this.state.cursorLocation.col
            ? true
            : false
        }
        key={this.state.cells[row].length * row + col}
        cellID={`cell-${row}/${col}`}
        onClick={(e) => this.handleClick(row, col, e)}
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
