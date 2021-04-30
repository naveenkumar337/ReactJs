import React from "react";
import UseEffectHook from "../UseEffect/UseEffectHook";
import UseStateWithArrays from "./UseStateWithArrays";
import CounterHook from "./UseStateWithCounterHook";
import StateHookWithObject from "./UseStateWithObject";
import UsingPrevState from "./UseStateWithPrevState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ConditionalHook from "../UseEffect/ConditionalHook";
import InitialRenderHook from "../UseEffect/InitialRenderHook";
function ParentHook() {
  return (
    <Router>
      <div>
        <h4>This is Hook Component Section</h4>
        <nav>
          <ul style={{}}>
            <li>
              <Link to="/">UseState</Link>
            </li>
            <li>
              <Link to="/use-effect">UseEffect</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/use-effect">
            <fieldset
              style={{
                border: "2px dotted blue",
                margin: "auto",
                padding: "20px",
              }}
            >
              <legend style={{ width: "inherit" }}>UseEffect Hook</legend>
              <UseEffectHook />
              <ConditionalHook/>
        <p>Initial Render Block</p>
              <InitialRenderHook/>
            </fieldset>
          </Route>
          <Route path="/">
            <fieldset
              style={{
                border: "2px dotted blue",
                margin: "auto",
                padding: "20px",
              }}
            >
              <legend style={{ width: "inherit" }}>UseState Hook</legend>
              <CounterHook></CounterHook>
              <p>
                This Hook will help with while understanding the need of
                PrevState.
              </p>
              <UsingPrevState></UsingPrevState>
              <p>Using the Object in the UseState Hook</p>
              <StateHookWithObject></StateHookWithObject>
              <p>Using the Arrays in the useState</p>
              <UseStateWithArrays></UseStateWithArrays>
            </fieldset>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ParentHook;
