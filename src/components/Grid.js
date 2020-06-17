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

    return <div>{rows}</div>;
  }

  render() {
    return (
      <div>
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
        {this.renderRow(4)}
        {this.renderRow(5)}
        {this.renderRow(6)}
        {this.renderRow(7)}
        {this.renderRow(8)}
      </div>
    );
  }
}

export default Grid;
