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

  render() {
    return (
      <div>
        <div className="grid-row">
          {this.renderCell(0, 0)}
          {this.renderCell(0, 1)}
          {this.renderCell(0, 2)}
          {this.renderCell(0, 3)}
          {this.renderCell(0, 4)}
          {this.renderCell(0, 5)}
          {this.renderCell(0, 6)}
          {this.renderCell(0, 7)}
          {this.renderCell(0, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(1, 0)}
          {this.renderCell(1, 1)}
          {this.renderCell(1, 2)}
          {this.renderCell(1, 3)}
          {this.renderCell(1, 4)}
          {this.renderCell(1, 5)}
          {this.renderCell(1, 6)}
          {this.renderCell(1, 7)}
          {this.renderCell(1, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(2, 1)}
          {this.renderCell(2, 2)}
          {this.renderCell(2, 0)}
          {this.renderCell(2, 3)}
          {this.renderCell(2, 4)}
          {this.renderCell(2, 5)}
          {this.renderCell(2, 6)}
          {this.renderCell(2, 7)}
          {this.renderCell(2, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(3, 1)}
          {this.renderCell(3, 2)}
          {this.renderCell(3, 0)}
          {this.renderCell(3, 3)}
          {this.renderCell(3, 4)}
          {this.renderCell(3, 5)}
          {this.renderCell(3, 6)}
          {this.renderCell(3, 7)}
          {this.renderCell(3, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(4, 1)}
          {this.renderCell(4, 2)}
          {this.renderCell(4, 0)}
          {this.renderCell(4, 3)}
          {this.renderCell(4, 4)}
          {this.renderCell(4, 5)}
          {this.renderCell(4, 6)}
          {this.renderCell(4, 7)}
          {this.renderCell(4, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(5, 0)}
          {this.renderCell(5, 1)}
          {this.renderCell(5, 2)}
          {this.renderCell(5, 3)}
          {this.renderCell(5, 4)}
          {this.renderCell(5, 5)}
          {this.renderCell(5, 6)}
          {this.renderCell(5, 7)}
          {this.renderCell(5, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(6, 0)}
          {this.renderCell(6, 1)}
          {this.renderCell(6, 2)}
          {this.renderCell(6, 3)}
          {this.renderCell(6, 4)}
          {this.renderCell(6, 5)}
          {this.renderCell(6, 6)}
          {this.renderCell(6, 7)}
          {this.renderCell(6, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(7, 1)}
          {this.renderCell(7, 2)}
          {this.renderCell(7, 0)}
          {this.renderCell(7, 3)}
          {this.renderCell(7, 4)}
          {this.renderCell(7, 5)}
          {this.renderCell(7, 6)}
          {this.renderCell(7, 7)}
          {this.renderCell(7, 8)}
        </div>
        <div className="grid-row">
          {this.renderCell(8, 1)}
          {this.renderCell(8, 2)}
          {this.renderCell(8, 0)}
          {this.renderCell(8, 3)}
          {this.renderCell(8, 4)}
          {this.renderCell(8, 5)}
          {this.renderCell(8, 6)}
          {this.renderCell(8, 7)}
          {this.renderCell(8, 8)}
        </div>
      </div>
    );
  }
}

export default Grid;
