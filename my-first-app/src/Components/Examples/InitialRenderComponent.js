import React, { Component } from "react";

class InitialRenderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      X: 0,
      Y: 0,
    };
  }
  logProcess = (e) => {
    console.log("logProcess");
    this.setState({ X: e.clientX, Y: e.clientY });
  };
  componentDidMount() {
    console.log("DidUpdate");
    window.addEventListener("mousemove", this.logProcess);
  }

  render() {
    return (
      <div>
        X:{this.state.X} Y:{this.state.Y}
      </div>
    );
  }
}
export default InitialRenderComponent;
