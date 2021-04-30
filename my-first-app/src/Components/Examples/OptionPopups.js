import React, { Component } from "react";
class OptionPopups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
    this.ClickHandle = this.ClickHandle.bind(this);
  }
  ClickHandle(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <button
          aria-haspopup="true"
          onClick={this.ClickHandle}
          aria-expanded={this.state.isOpen}
        >
          {" "}
          Select Options
        </button>{" "}
      </div>
    );
  }
}

export default OptionPopups;
