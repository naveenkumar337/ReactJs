import React, { useState, useReducer } from "react";

const initialState = {
  FirstCounter: 0,
  SecondCounter: 10,
};
const reducer = (state, action) => {
    console.log(action)
  switch (action.type) {
    case "Increment":
      return {...state, FirstCounter: state.FirstCounter + 1 };
    case "Decrement":
      return {...state, FirstCounter: state.FirstCounter - 1 };
      case "Increment2":
        return {...state, SecondCounter: state.SecondCounter + action.value };
      case "Decrement2":
        return {...state, SecondCounter: state.SecondCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function UseReducerWithObject() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <div>
            Disply Values
            <p>FirstCounter: {state.FirstCounter}</p>
            <p>SecondCounter: {state.SecondCounter}</p>
        </div>
      <div>
        <button onClick={()=>dispatch({ type: "Increment" })}>Increment</button>
        <button onClick={()=>dispatch({ type: "Decrement" })}>Descrement</button>
        <button onClick={()=>dispatch({ type: "Reset" })}>Reset</button>
        <button onClick={()=>dispatch({ type: "Increment2" ,value:2})}>Increment</button>
        <button onClick={()=>dispatch({ type: "Decrement2" ,value:2})}>Descrement</button>
      </div>
    </div>
  );
}

export default UseReducerWithObject;
