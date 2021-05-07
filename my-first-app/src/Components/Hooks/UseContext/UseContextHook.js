import React, { useContext } from "react";

const myContext = React.createContext("");
function UseContextHook() {
  return (
    <div>
      <myContext.Provider value="naveen">
        <Child1 />
        <myContext.Provider value="Kumar">
          <Child2 />
        </myContext.Provider>
      </myContext.Provider>
    </div>
  );
}

function Child1() {
  return <div>This is the Child 1 component
  </div>;
}
function Child2() {
  const context = useContext(myContext);
  console.log({ context });
  return (
    <div>
      This is the Child 2 component
      <p>this is from usecontext '{context}'</p>
    </div>
  );
}
export default UseContextHook;
