import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(16).fill(null),
    };
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    cells[i] = "X";
    this.setState({ cells });
  }

  renderCell(i) {
    return (
      <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="grid-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
        </div>
        <div className="grid-row">
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
        </div>
        <div className="grid-row">
          {this.renderCell(8)}
          {this.renderCell(9)}
          {this.renderCell(10)}
          {this.renderCell(11)}
        </div>
        <div className="grid-row">
          {this.renderCell(12)}
          {this.renderCell(13)}
          {this.renderCell(14)}
          {this.renderCell(15)}
        </div>
      </div>
    );
  }
}

export default Grid;
