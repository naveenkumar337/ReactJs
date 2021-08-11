import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../_Actions";
import { Link } from "react-router-dom";
import USER from "./UserData";
import Alert from "./Alert";


class Dashboard extends Component {

  componentDidMount() {
    var user = JSON.parse(localStorage.getItem("authUser"));

    if (user && user.isauthorized === true) {
      this.props.getAll();
    } else {
      this.props.logout();
    }
  }
  componentWillUnmount() {
    localStorage.clear();
  }
  logoutHandle = (ev) => {
    ev.preventDefault();
    this.props.logout();
  };
  onUpdateHandler=(ev)=>{
    console.log(ev);
    this.props.update(ev);
    
  }
  deleteHandle = (ev) => {
    ev.preventDefault();
    this.props.delete(ev.target.getAttribute("data-key"));
    // this.props.getAll();
  };
  render() {
    const users = this.props.data.users;

    return (
      <div className="container-fluid bg-secondary">
        <div className="row">
          <div className="bg-info rounded-1 p-2 d-flex justify-content-between">
            {/* <Alert /> */}
            <h4 className="text-white">Dashboard</h4>
            <button
              className="btn btn-link bg-white"
              onClick={this.logoutHandle}
            >
              <span className="h5">Logout</span>
            </button>
          </div>
          <div className="dashboard-body">
            <h5 className="text-white">Users are</h5>
            <div className="row p-2">
              <USER
                props={users}                
                onClickHandle={this.deleteHandle}
                onUpdateHandler={this.onUpdateHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log(state);
  var data = state.dashboard_reducer;
  return { data };
};

const actions = {
  getAll: userActions.getUsers,
  logout: userActions.logout,
  delete: userActions.deleteUser,
  update:userActions.updateUser
};

const DashboardConnect = connect(mapState, actions)(Dashboard);
export default DashboardConnect;
