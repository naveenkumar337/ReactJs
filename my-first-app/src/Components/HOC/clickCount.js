import React, { Component } from "react";
import withComponent from "./withCounter";

class ClickCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}> {count} clicked</button>
      </div>
    );
  }
}
export default withComponent(ClickCount);
