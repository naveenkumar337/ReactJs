import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userActions } from "../_Actions";
import { connect } from "react-redux";
import Alert from "../DashBoard/Alert";
class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        accessLevel:''  ,
        phonenumber: "",
        password: "",
        DateOfBirth:''
      },
      submited: false,
      isAdmin:false,
    };
  }
  onValueChange = (eve) => {
    var { name, value } = eve.target;
    if(name==="accessLevel" && value==="admin"){
      this.setState({
        ...this.state,
        isAdmin:true,
        user:{
          ...this.state.user,
        [name]:value,
        email:'admin@gmail.com',
        password:'admin'
        }
      })
    }else  if(name==="accessLevel" && value==="user"){
      this.setState({
        isAdmin:false,
        ...this.state,
        user:{
        ...this.state.user,
        [name]:value
        }
      })
    }
    else{
    this.setState({
      ...this.state,
      user: { ...this.state.user, [name]: value },
    });
  }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ submited: true });
    const { user } = this.state;
    if (
      user.firstname &&
      user.lastname &&
      user.phonenumber &&
      user.email &&
      user.password
    ) {
      this.props.register(user);
    }
  };
  render() {
    return (
      <div className="container vh-100">
        <div className="d-flex align-items-center vh-100 justify-content-center">
          {/* <Aler t/> */}
          <form
            className="form col-md-4 bg-light p-4 rounded m-auto"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                onChange={this.onValueChange}
                className="form-control"
              />
              {this.state.user.firstname === "" &&
              this.state.submited === true ? (
                <span className="text-danger">Please Enter FirstName</span>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                onChange={this.onValueChange}
              />
              {this.state.user.lastname === "" &&
              this.state.submited === true ? (
                <span className="text-danger">Please Enter LastName</span>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="accessLevel">Access Level</label>
              <select
                name="accessLevel"
                className="form-control form-select"
                onChange={this.onValueChange}
              >
                <option value="user">
                  User
                </option>
                <option value="admin">
                  Admin
                </option>
              </select>
            </div>
            <div className="form-group readonly" >
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"                
                value={this.state.isAdmin? 'admin@gmail.com' :this.state.user.email}
                disabled={this.state.isAdmin?"disabled":""}
                onChange={this.onValueChange} 
              />
              {this.state.user.email === "" && this.state.submited === true ? (
                <span className="text-danger">Please Enter Email</span>
              ) : null}
            </div>
            <div className="form-group readonly" >
              <label htmlFor="DateOfBirth">Date Of Birth</label>
              <input
                name="DateOfBirth"
                type="date"
                className="form-control"                
                value={this.state.DateOfBirth}
                onChange={this.onValueChange} 
              />
              {this.state.user.DateOfBirth === "" && this.state.submited === true ? (
                <span className="text-danger">Please Select DateOfBirth</span>
              ) : null}
            </div>
           
            <div className="form-group">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                name="phonenumber"
                type="text"
                className="form-control"
                onChange={this.onValueChange}
              />
              {this.state.user.phonenumber === "" &&
              this.state.submited === true ? (
                <span className="text-danger">Please Enter PhoneNumber</span>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="password">PassWord</label>
              <input
                name="password"
                type="text"
                className="form-control"
                value={this.state.isAdmin? 'admin' :this.state.user.password}
                disabled={this.state.isAdmin?"disabled":""}
                onChange={this.onValueChange}
              />
              {this.state.user.password === "" &&
              this.state.submited === true ? (
                <span className="text-danger">Please Enter PassWord</span>
              ) : null}
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mt-2" value="">
                Submit
              </button>
              <Link
                to="/login"
                type="button"
                className="btn btn-link mt-2"
                value=""
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function mapState(state) {
  const { registering } = false;
  return registering;
}
const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterForm);
export default connectedRegisterPage;
