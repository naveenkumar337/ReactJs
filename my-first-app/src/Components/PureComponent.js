import React, { Component, PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure comp");
    const { vname } = this.state;
    console.log(vname);
    return (
      <div>
        <h3>This is pure Component</h3>
        <h4>{vname}</h4>
      </div>
    );
  }
}

class RegularComp extends Component {
  render() {
    const { vname } = this.state.name;
    console.log("regular comp");
    console.log(this.state.name);
    return (
      <div>
        <h3>This is regular comp </h3>
        <h4>{vname}</h4>
      </div>
    );
  }
}

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "naveen",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "naveen",
      });
    }, 2000);
  }

  render() {
    console.log("********* Parent Comp *********");
    return (
      <div>
        <h3>This is ParentComp</h3>
        <RegularComp vname={this.state.name}></RegularComp>
        <PureComp vnme={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
