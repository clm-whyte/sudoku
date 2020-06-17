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

  render() {
    let grid = [];
    for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
      grid.push(<div key={"row" + rowNumber} className="grid-row"></div>);
      for (let colNumber = 0; colNumber < 9; colNumber++) {
        grid.push(this.renderCell(rowNumber, colNumber));
      }
    }
    return <div>{grid}</div>;
  }
}

export default Grid;
