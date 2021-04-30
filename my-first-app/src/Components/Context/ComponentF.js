import React, { Component, useContext } from "react";
import PersonContext from "./UserContext";

class ComponentF extends Component {
  render() {
    console.log(this.context);
    const Valuecontext=this.context;
    return (
      <div>
        {/* consuming the UserContext value in here */}
        {/* <UserContext.Consumer>
          {(name) => {
            return <div> Component F with {name}</div>;
          }}
        </UserContext.Consumer> */}
        <PersonContext.Consumer>
          {(color1) => {
            return (
              <div>
              <button>
                Name color
              </button>
            <p>{color1}</p></div>
            );
          }}
        </PersonContext.Consumer>
        <p>Welcome to hig school</p>
      </div>
    );
  }
}
ComponentF.contextType = PersonContext;
export default ComponentF;
