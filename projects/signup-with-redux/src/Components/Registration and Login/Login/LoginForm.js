import  React,{ Component } from "react";
import { Link } from "react-router-dom";
import { userActions } from "../_Actions";
import { connect } from "react-redux";
import Alert from "../DashBoard/Alert";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    //this.props.logout();
    this.state = {
      username: "",
      password: "",
      islogin: false,
    };
  }
  onChanageHandler = (eve) => {
    this.setState({ islogin: false });
    var {name, value} = eve.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();    
    this.setState({ islogin: true });
    if(this.state.username!=='' && this.state.password!=='')
      this.props.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <div className="container min-vh-100" >        
        <div className="d-flex  align-items-center vh-100 justify-content-center">
          {/* <Alert/> */}
          <form className="form bg-light  col-md-4 p-5 rounded m-auto" onSubmit={this.onSubmitHandler}>
          <div className="text-primary text-center"><p>Login As Admin</p></div>
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input
                type="email"
                name="username"
                onChange={this.onChanageHandler}
                className="form-control"
              ></input>
              {this.state.username==='' && this.state.islogin===true  ? <span className="text-danger">Please Enter UserName</span>:null}
            </div>
            <div className="form-group">
              <label htmlFor="password">PassWord</label>
              <input
                type="text"
                name="password"
                onChange={this.onChanageHandler}
                className="form-control"
              ></input>
              {this.state.password==='' && this.state.islogin===true  ? <span className="text-danger">Please Enter PassWord</span>:null}
            </div>
            <div className="btn-group mt-3">
              <button type="submit" className="form-control btn-info">Submit</button>
              <Link to="/register" className="btn btn-link" >Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapState(state){
    const {user,isLogin}=state.login_reducer
    return {user,isLogin}
}

const loginActions={
    login:userActions.login,
    logout:userActions.logout
}

const LoginPageConnect=connect(mapState,loginActions)(LoginForm);
export default LoginPageConnect;