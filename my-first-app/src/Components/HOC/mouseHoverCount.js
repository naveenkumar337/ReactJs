import React, { Component } from "react";
import withCounter from "./withCounter";
class MouseHoverCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h5 onMouseOver={incrementCount}>{count} mouse moved</h5>
      </div>
    );
  }
}
export default withCounter(MouseHoverCount);
