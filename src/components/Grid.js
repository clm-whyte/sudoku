import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
      ],
    };
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
        onClick={() => this.handleClick(row, col)}
      />
    );
  }

  renderRow(rowNumber) {
    return (
      <div className="grid-row">
        {this.renderCell(rowNumber, 0)}
        {this.renderCell(rowNumber, 1)}
        {this.renderCell(rowNumber, 2)}
        {this.renderCell(rowNumber, 3)}
        {this.renderCell(rowNumber, 4)}
        {this.renderCell(rowNumber, 5)}
        {this.renderCell(rowNumber, 6)}
        {this.renderCell(rowNumber, 7)}
        {this.renderCell(rowNumber, 8)}
      </div>
    );
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
