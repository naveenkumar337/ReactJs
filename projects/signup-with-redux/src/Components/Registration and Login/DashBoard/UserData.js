import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {userActions} from '../_Actions'
export default class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isedit: false,
      user: "",
      users:{
        FirstName: "",
        LastName: "",
        Email: "",
        MobileNumber: "",
        Password: "",
        DateOfBirth:""
      }
    };
  }
  onEditClickHandler = (ev) => {
    var email=ev?ev.target.getAttribute("data-key"):''
    this.setState({
      isedit: !this.state.isedit,
      user: email,
      users:this.props.props.find((item,i)=>{return item.Email===email})
    });
  };
  on_EditChange_Handler=(eve)=>{
    var { name, value } = eve.target;

    this.setState({
      users:{
      ...this.state.users,
      Email: this.state.user,
      [name]: value,
    }
  });
  }
on_EditSave_Handler=(eve)=>{
this.setState({
  ...this.state,
  isedit:false
});
this.props.onUpdateHandler(this.state.users);
}
  render() {
    var users = this.props.props;
    console.log("user data merge"); 
    console.log(this.props);
    console.log(this.props.props);
    if (users && (typeof users!=="function") && users.length > 0) {
      return (
        <>
          {users.map((user,i) => (
            <div className="card col-lg-4 shadow-lg ml-1 mt-1" key={i}>
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <div className="">
                    <img
                      className={`img rounded-1 img-responsive shadow-lg img-thumbnail`}
                      src='../../../Components/logo192.png'
                      alt="   "
                    />
                    <span>{ user.FirstName.substr(0,1).toUpperCase()+user.FirstName.substr(1).toLowerCase() +" "+ user.LastName.substr(0,1).toUpperCase()+user.LastName.substr(1).toLowerCase()}</span>
                  </div>
                  <div className="d-flex mb-1">
                    <i
                      className={`fas ${
                        !(this.state.user === user.Email && this.state.isedit)
                          ? "fa-edit"
                          : "fa-times-circle"
                      } btn btn-sm btn-default br-3 bg-info text-white`}
                      onClick={this.onEditClickHandler}
                      data-key={user.Email}
                    ></i>

                    <i
                      className="fas fa-trash-alt btn btn-sm btn-default br-3 bg-danger text-white"
                      onClick={this.props.onClickHandle}
                      data-key={user.Email}
                    ></i>
                  </div>
                </div>
                {this.state.user === user.Email && this.state.isedit ? (
                  <EditForm
                    user={this.state.isedit?this.state.users:user}
                    onChangeHandler={this.on_EditChange_Handler}
                    onSaveHandler={this.on_EditSave_Handler}
                  />
                ) : (
                  <CardBodyData user={user} state={this.state} />
                )}
              </div>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          <div className="h3 text-danger bg-white text-center">No data</div>
          <div className="text-white text-center">
            <p>
              Please register users
              <Link to="/register" className="btn btn-link text-info">
                SignUp
              </Link>
            </p>
          </div>
        </>
      );
    }
  }
}

class CardBodyData extends React.Component {
  render() {
    var user = this.props.user;    
    return (
      <>
        <p className="card-text">{user.Email}</p>
        <p className="card-text">{user.MobileNumber}</p>
        <p className="card-text">{user.Password}</p>
        <p className="card-text">{new Date(user.DateOfBirth).toLocaleDateString()}</p>
      </>
    );
  }
}

class EditForm extends React.Component {
  constructor(props) {
    super(props);
  }  

  render() {
    var user = this.props.user;
    console.log("Edit Form")
    console.log(this.props)
    var dob=new Date(user.DateOfBirth);
    return (
      <>
        <form onSubmit={this.props.onSaveHandler}>
          <div className="form-group row">
            <lable className="col-sm-3 col-form-label" htmlFor="username">
              Name
            </lable>
            <div className=" form-group col-sm-9">
              <input
                type="text"
                name="FirstName"
                onChange={this.props.onChangeHandler}
                className="form-control-sm col-sm-4 w-50"
                value={user.FirstName}
              />
              <input
                type="text"
                name="LastName"
                onChange={this.props.onChangeHandler}
                className="form-control-sm col-sm-4 w-50"
                value={user.LastName}
              />
            </div>
          </div>
          <div className="form-group row">
            <lable className="col-sm-3 col-form-label-sm" htmlFor="Email">
              Email
            </lable>
            <div className="col-sm-9">
              <input
                type="text"
                readOnly
                name="Email"
                className="form-control-sm form-control-plaintext  w-100"
                value={user.Email}
              />
            </div>
          </div>
          <div className="form-group row">
            <lable
              className="col-sm-3 col-form-label-sm"
              htmlFor="MobileNumber"
            >
              MNumber
            </lable>
            <div className="col-sm-9">
              <input
                type="text"
                name="MobileNumber"
                onChange={this.props.onChangeHandler}
                className="form-control-sm w-100"
                value={user.MobileNumber}
              />
            </div>
          </div>
          <div className="form-group row">
            <lable
              className="col-sm-3 col-form-label-sm"
              htmlFor="DateOfBirth"
            >
              DOB
            </lable>
            <div className="col-sm-9">
              <input
                type="date"
                name="DateOfBirth"
                onChange={this.props.onChangeHandler}
                className="form-control-sm w-100"
                value={user.DateOfBirth}
              />
            </div>
          </div>
          <div className="form-group row">
            <lable className="col-sm-3 col-form-label-sm" htmlFor="Password">
              PassWord
            </lable>
            <div className="col-sm-9">
              <input
                type="text"
                name="Password"
                onChange={this.props.onChangeHandler}
                className="form-control-sm w-100"
                value={user.Password}
              />
            </div>
          </div>
          <div className="form-group mt-1">
            <button type="submit" className="btn-sm w-25 float-end btn-info">
              Save
            </button>
          </div>
        </form>
      </>
    );
  }
}

const actions={  
    update : userActions.updateUser,
}

connect(null,actions)(UserData);