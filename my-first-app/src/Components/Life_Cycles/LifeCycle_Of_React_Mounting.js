import React, { Component } from "react";

class LifeCycle_Of_React_MountingA extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("A Constructor Phase");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("A getDerivedFromProps Phase");
    return null;
  }
  componentDidMount() {
    console.log("A didmount Phase");
  }
  render() {
    console.log("A render Phase");
    return (
      <div>
        <h4>Welcome to LifeCycle Phase</h4>
        <LifeCycle_Of_React_MountingB />
      </div>
    );
  }
}

export default LifeCycle_Of_React_MountingA;

class LifeCycle_Of_React_MountingB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("B Constructor Phase");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("B getDerivedFromProps Phase");
    return null;
  }
  componentDidMount() {
    console.log("B didmount Phase");
  }
  render() {
    console.log("B render Phase");
    return <div></div>;
  }
}
