// import { axios } from "axios";
import { createBrowserHistory } from "history";
import axios from "axios";
const services = {
  login,
  register,
  logout,
  getall,
  update,
  delete: _delete,
};
const history = createBrowserHistory();

function login(username, password) {
  return axios
    .get(
      `http://localhost:44323/api/User?userName=${username}&passWord=${password}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

function register(user) {
  var objUser = {
    FirstName: user.firstname,
    LastName: user.lastname,
    Email: user.email,
    Password: user.password,
    MobileNumber: user.phonenumber,
    DateOfBirth: user.DateOfBirth,
  };
  return axios
    .post("http://localhost:44323/api/User/", objUser)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
function logout() {
  // const history = useHistory()

  localStorage.setItem("authUser", {});
  history.push("/login");
  window.location.reload(true);
}
function getall() {
  var user = JSON.parse(localStorage.getItem("authUser"));
  var tocken = new Buffer(user.username + ":" + user.password);
  return axios
    .get("http://localhost:44323/api/User", {
      headers: {
        Authorization: `Basic ${tocken.toString("base64")}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
function _delete(email) {
  var user = JSON.parse(localStorage.getItem("authUser"));
  var tocken = new Buffer(user.username + ":" + user.password);
  return axios
    .delete(`http://localhost:44323/api/User/?Email=${email}`, {
      headers: {
        Authorization: `Basic ${tocken.toString("base64")}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

function update(userData) {
  var user = JSON.parse(localStorage.getItem("authUser"));
  var tocken = new Buffer(user.username + ":" + user.password);
  return axios
    .put("http://localhost:44323/api/User", userData, {
      headers: {
        Authorization: `Basic ${tocken.toString("base64")}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export default services;
