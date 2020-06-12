import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="cell" onClick={() => this.setState({ value: "1" })}>
        {this.state.value}
      </button>
    );
  }
}

export default Cell;
