import React, { Component, useState } from "react";

class WelcomeState extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  Increment() {
    console.log(this.state.counter);
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <p>Count:{this.state.counter}</p>
        <button onClick={() => this.Increment()}>Click Me!</button>
      </div>
    );
  }
}

function FState() {
  let [message, setMessage] = useState("Login");
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <p>{isLoggedIn ? "Welcome Mr." + message : "Please Login!"}</p>
      <button
        onClick={() => {
          setMessage("Naveen");
          setIsLoggedIn(true);
        }}
      >
        {isLoggedIn ? "LogOut" : "Login!"}
      </button>
    </div>
  );
}
export { WelcomeState, FState };
