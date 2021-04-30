import React from "react";
const withCounter = (WrappedComponent) => {
  // debugger;
  class NewCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevProps) => {
        return { count: prevProps.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewCounter;
};
export default withCounter;
