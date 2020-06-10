import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(16).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    if (calculateWinner(cells) || cells[i]) {
      return;
    }
    cells[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      cells,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderCell(i) {
    return (
      <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const winner = calculateWinner(this.state.cells);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="grid-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className="grid-row">
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
        </div>
        <div className="grid-row">
          {this.renderCell(8)}
          {this.renderCell(9)}
          {this.renderCell(10)}
        </div>
      </div>
    );
  }
}

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default Grid;
