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
        onClick={() => this.handleClick(row, col)}
      />
    );
  }

  renderRow(rowNumber) {
    let rows = [];
    for (var col = 0; col < 9; col++) {
      rows.push(this.renderCell(rowNumber, col));
    }

    return <div key={rowNumber}>{rows}</div>;
  }

  render() {
    let grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(this.renderRow(i));
    }
    return <div>{grid}</div>;
  }
}

export default Grid;
