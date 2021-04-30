import React, { Component } from "react";
import { ChildComponent, CallWithParam, ReadAllProps } from "./Child";
export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: "VeeraBhadra",
    };
    this.meetParent = this.meetParent.bind(this);
    this.withParams = this.withParams.bind(this);
  }
  meetParent() {
    alert(`Iam Your Parent ${this.state.name}`);
  }
  withParams(pname) {
    alert(`Iam Parent ${this.state.name} calling from Child ${pname}`);
  }
  render() {
    return (
      <div>
        <ReadAllProps ParentHandle={this} />
        <ChildComponent ParentHandle={this.meetParent} />
        <CallWithParam parentWithParam={this.withParams} />
      </div>
    );
  }
}
