import React, { Component, memo, PureComponent } from "react";

import Memo from "./MemoComp";
class PureComp extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Pure comp");
    const { name } = this.props;
    console.log(name);
    return (
      <div>
        <h3>This is pure Component</h3>
        <h4>{name}</h4>
      </div>
    );
  }
}

class RegularComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { vname } = this.props;
    console.log("regular comp");
    console.log(vname);
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
        <Memo name={this.state.name} />
        {/* <RegularComp vname={this.state.name}></RegularComp>
                <PureComp vnme={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
