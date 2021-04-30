import React, { Component } from "react";

function Welcome() {
  return (
    <div>
      <h4>Welcome to React,This is function component</h4>
      <PropsComponent name="Naveen" age="22" />
    </div>
  );
}
//Props
function PropsComponent(props) {
  return (
    <p>
      Welcome to Function props,
      <br /> Name:-{props.name} his age: {props.age}
    </p>
  );
}
export default Welcome;
