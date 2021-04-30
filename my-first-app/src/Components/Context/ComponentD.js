import React, { Component } from "react";
import ComponentE from "./ComponentE";
import Context from './UserContext'
class ComponentD extends Component {
  render() {
    return (
      <div>
        <Context.Provider value="Naveen">
        <ComponentE />
        </Context.Provider>
      </div>
    );
  }
}

export default ComponentD;
