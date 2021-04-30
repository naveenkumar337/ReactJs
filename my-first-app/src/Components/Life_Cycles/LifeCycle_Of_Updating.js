import React, { Component } from "react";

class LifeCycle_Of_UpdatingA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A getDerivedStateFromProps");
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, PreState) {
    console.log("LifeCycle A getSnapshotBeforeUpdate");
    return null;
  }
  shouldComponentUpdate() {
    console.log("LifeCycle A ShouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("LifeCycle A ComponentDidUpdate");
  }
  ChcnageValue = (event) => {
    this.setState({
      name: "naveen",
    });
  };
  render() {
    console.log("LifeCycle A Render method");
    return (
      <div>
        <p>Updating the LifeCycle</p>
        <button onClick={this.ChcnageValue}>Click me to change state</button>
        <LifeCycle_Of_UpdatingB />
      </div>
    );
  }
}

export default LifeCycle_Of_UpdatingA;

export class LifeCycle_Of_UpdatingB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getDerivedStateFromProps");
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, PreState) {
    console.log("LifeCycle B getSnapshotBeforeUpdate");
    return null;
  }
  shouldComponentUpdate() {
    console.log("LifeCycle B ShouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("LifeCycle B ComponentDidUpdate");
  }
  render() {
    console.log("LifeCycle B render");
    return (
      <div>
        <h3>LifeCycleB</h3>
      </div>
    );
  }
}
