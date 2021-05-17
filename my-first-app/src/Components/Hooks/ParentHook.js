import React, { useContext } from "react";
import  '../../Css/ParentHook.css'
import UseEffectHook from "./UseEffect/UseEffectHook";
import UseStateWithArrays from "./StateHook/UseStateWithArrays";
import CounterHook from "./StateHook/UseStateWithCounterHook";
import StateHookWithObject from "./StateHook/UseStateWithObject";
import UsingPrevState from "./StateHook/UseStateWithPrevState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ConditionalHook from "./UseEffect/ConditionalHook";
import InitialRenderHook from "./UseEffect/InitialRenderHook";
import CleanUp from "./UseEffect/CleanUp";
import { FetchData, FetchingDataWithID } from "./UseEffect/FetchData";
import UseContextHook from "./UseContext/UseContextHook";
import UseReducerHook from "./UseReducer/UseReducerHook";
import UseReducerWithObject from "./UseReducer/UseReducerWithObject";
import UseReducerWithUseEffect from "./UseReducer/UseReducerWithUseEffect";
import DataFetchingwithUseReducer from "./UseReducer/DataFetchingwithUseReducer";
function ParentHook() {
  return (
    <Router>
      <div class="container">
        <h4>This is Hook Component Section</h4>
        <nav class="navbar navbar-expand-lg bg-light flex-auto rounded space-bottom-2">
          <div class="navbar-collapse collapse">
          <ul class="navbar-nav mr-auto" style={{}}>
            <li class="nav-item active">
              <Link class="nav-link" to="/">UseState</Link>
            </li>
            <li class="nav-item active">
              <Link to="/use-context" class="nav-link">UseContext</Link>
            </li>
            <li class="nav-item active">
              <Link to="/use-effect" class="nav-link">UseEffect</Link>
            </li>
            <li class="nav-item active">
              <Link to="/use-reducer" class="nav-link">Use Reducer</Link>
            </li>
          </ul>
          </div>
        </nav>
<div class="container conatiner-2">
        <Switch>
          <Route path="/use-effect">
            <fieldset  class="overflow-scroll">
              <legend>UseEffect Hook</legend>
              <UseEffectHook />
              <ConditionalHook />
              <p>Initial Render Block</p>
              <InitialRenderHook />
              <p>Cleanup Hook</p>
              <CleanUp />
              <p>Calling api using useEffect</p>
              <p>
                <b>the result is:</b>
              </p>
              <FetchData />
              <p>call api by sending the ID</p>
              <FetchingDataWithID />
            </fieldset>
          </Route>
          <Route path="/use-context" >
            <fieldset>
              <legend>Use Context Hook</legend>
              <UseContextHook />
            </fieldset>
          </Route>
          <Route path="/use-reducer">
            <fieldset>
              <legend>Use Reducer Hook</legend>
              <UseReducerHook />
              <UseReducerWithObject />
              <UseReducerWithUseEffect />
              <DataFetchingwithUseReducer/>
            </fieldset>
          </Route>
          <Route path="/">
            <fieldset>
              <legend>UseState Hook</legend>
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
      </div>
    </Router>
  );
}

export default ParentHook;
