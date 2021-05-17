import React, { useReducer, useContext } from "react";

const MYContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.value;
    case "Decrement":
      return state - action.value;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function UseReducerWithUseEffect() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <MYContext.Provider
        value={{ CounterState: state, CounterDispatch: dispatch }}
      >
        <h4>The Count is {state}</h4>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </MYContext.Provider>
    </div>
  );
}

function ComponentA() {
  const Context = useContext(MYContext);
  return (
    <div>
      <div>
        ComponentA{" "}
        <button onClick={() => Context.CounterDispatch({type:"Increment",value:1})}>
          Increment
        </button>
        <button onClick={() => Context.CounterDispatch({type:"Decrement",value:1})}>
          Decrement
        </button>
        <button onClick={() => Context.CounterDispatch({type:"Reset"})}>Reset</button>
      </div>
    </div>
  );
}
function ComponentB() {
  const Context = useContext(MYContext);
  return (
    <div>
      <div>
        ComponentB{" "}
        <button onClick={() => Context.CounterDispatch({type:"Increment",value:2})}>
          Increment
        </button>
        <button onClick={() => Context.CounterDispatch({type:"Decrement",value:2})}>
          Decrement
        </button>
        <button onClick={() => Context.CounterDispatch({type:"Reset"})}>Reset</button>
      </div>
    </div>
  );
}
function ComponentC() {
  const Context = useContext(MYContext);

  return (
    <div>
      <div>
        ComponentC{" "}
        <button onClick={() => Context.CounterDispatch({type:"Increment",value:3})}>
          Increment
        </button>
        <button onClick={() => Context.CounterDispatch({type:"Decrement",value:3})}>
          Decrement
        </button>
        <button onClick={() => Context.CounterDispatch({type:"Reset"})}>Reset</button>
      </div>
    </div>
  );
}
export default UseReducerWithUseEffect;
