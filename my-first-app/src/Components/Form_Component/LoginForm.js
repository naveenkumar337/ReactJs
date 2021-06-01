import { react, Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import {createHashHistory} from 'history'

// import "../../../node_modules/css/lib/parse/index";
import axios from "axios";
class MainLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      isLogin: false,
    };
  }

  onChangeHandle = (e) => {
    console.log(e.target.name + " " + e.target.value);
    var name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  SubmitHandle = (e) => {
    e.preventDefault();
    var token = new Buffer(this.state.userName + ":" + this.state.passWord);
    axios
      .get(`https://localhost:44323/api/User/?userName=${this.state.userName}&passWord=${this.state.userName}`, {
        headers: {
          'Authorization': `basic ${token.toString('base64')}`
        }
      })
      .then((XHRRes) => {
        alert("success");
        console.log(XHRRes.data);
        this.setState({
          isLogin:true
        })
        createHashHistory.push('/dashboard')
      })
      .catch((XHRErr) => {
        alert("Failed");
        console.log(XHRErr);
      });
  };
  render() {
    var islogedin = this.state.isLogin;
    if (!islogedin) {
      return (
        <LoginForm
          onChangeHandle={this.onChangeHandle}
          SubmitHandle={this.SubmitHandle}
        />
      );
    } else {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/dashboard">DashBoard</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/list" render={()=>{return(<div>welcome to List</div>)}}></Route>
              <Route path="/dashboard"  render={()=>{return(<div>welcome to dashbord</div>)}}></Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="form col-xl-12" onSubmit={this.props.SubmitHandle}>
            <div className="form-group">
              <label className="label" htmlFor="userName">
                UserName
              </label>
              <input
                type="text"
                name="userName"
                onChange={this.props.onChangeHandle}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="passWord">
                PassWord
              </label>
              <input
                type="text"
                name="passWord"
                onChange={this.props.onChangeHandle}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-info" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MainLoginForm;
