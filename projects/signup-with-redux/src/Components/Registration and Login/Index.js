import React, { Component } from "react";
import {
  Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import history from "./History";
// import {use  as history} from 'react-redux'
import Dashboard from "./DashBoard/Dashboard";
import Login from "./Login/LoginForm";
import Registration from "./Registration/RegisterForm";
import { connect } from "react-redux";
import {userActions} from './_Actions'
import Alert from "./DashBoard/Alert";
import ErrorBoundary from "../ErrorBoundary";
export default class Index extends Component { 
  render() {
    var alertMessage = this.props.alert;
    if (!alertMessage) {
      return (
        <div>
          {/* <ErrorBoundary> */}
          <Alert/>
          <Router history={history}>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Registration} />
              <Redirect from="*" to="/dashboard" />
            </Switch>
          </Router>
          {/* </ErrorBoundary> */}
        </div>
      );
    }
    else{
        return (<div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>)
    }
  }
}

function mapState(state) { debugger
  const { alert } = state;
  return { alert };
}

const actionLogout={
logout:userActions.logout
}

const appPage = connect(mapState, actionLogout)(Index);
export { appPage as Index };
