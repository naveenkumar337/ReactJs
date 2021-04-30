import React from "react";

function getChild(props) {
  console.log("Hello");
  props.ParentHandle();
}

function ChildComponent(props) {
  return (
    <div>
      {/* Calling Method in Parent Class */}
      <button onClick={() => getChild(props)}>Click Here</button>
      <button onClick={props.ParentHandle}>Meet Parent</button>
    </div>
  );
}
function ReadAllProps(props) {
  return (
    <div>
      {/* Calling the Methods By default */}
      {
        (console.log(props.ParentHandle.state.name),
        props.ParentHandle.meetParent(),
        props.ParentHandle.withParams("ReadAllProps"))
      }
    </div>
  );
}
function CallWithParam(props) {
  return (
    <div>
      <button onClick={() => props.parentWithParam("naveen")}>
        Meet Parent With Params
      </button>
    </div>
  );
}
export { ChildComponent, CallWithParam, ReadAllProps };
