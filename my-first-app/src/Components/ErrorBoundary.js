import React, { Component } from "react";

function HeroName({ heroName }) {
  if (heroName === "Jocker") {
    throw new Error("Not an Hero");
  }

  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  );
}
function HeroName2({ heroName }) {
  if (heroName === "Jocker") {
    throw new Error("Not an Hero");
  }

  return <h1>{heroName}</h1>;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    console.log("state error raising");
    console.log(error);
    return {
      hasError: true,
    };
  }
  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something Went Wrong...</h2>;
    } else {
      return this.props.children;
    }
  }
}

export { HeroName, HeroName2, ErrorBoundary };
