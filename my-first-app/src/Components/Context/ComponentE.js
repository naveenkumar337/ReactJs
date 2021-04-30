import React, { Component } from "react";
import ComponentD from "./ComponentD";
import ComponentF from "./ComponentF";
import Context from "./UserContext";
class ComponentE extends Component {
  render() {
    const valueContext = this.context;
    console.log(valueContext);
    return (
      <div>
        <div>
          <p>This is the Component E</p>
          <Context.Consumer>
            {(value) => {
              return <h4>Value is {value}</h4>;
            }}
          </Context.Consumer>
        </div>
        {/* <Context.Provider value={{name:"naveen",value:"123445"}}> */}

        <ComponentF />
        {/* </Context.Provider> */}
      </div>
    );
  }
}
// ComponentE.contextType=Context
export default ComponentE;
