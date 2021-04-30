import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Hook from "../Hooks/StateHook/ParentHook";
class BasicRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
class About extends Component {
  render() {
    return <div>This is about your self</div>;
  }
}
class Contact extends Component {
  render() {
    return <div>Your's Contacts are Empty</div>;
  }
}
class DashBoard extends Component {
  render() {
    return <div>Welcome to dashBoard</div>;
  }
}
export default BasicRouter;
