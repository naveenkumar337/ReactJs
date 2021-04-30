import React, { Component, forwardRef } from "react";

class FRParent extends Component {
  constructor(props) {
    super(props);

    this.InputRef = React.createRef();
  }
  FRclickHandle = () => {
    this.InputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRChild ref={this.InputRef} />
        <button onClick={this.FRclickHandle}>FRButton</button>
      </div>
    );
  }
}

export default FRParent;

const FRChild = forwardRef((props, ref) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Forword Ref Child Input Field"
        ref={ref}
      />
    </div>
  );
});
