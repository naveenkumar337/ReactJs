// import { axios } from "axios";
import history from "./History";
import {url} from '../Connection/ApiLink'
import axios from "axios";
const services = {
  login,
  register,
  logout,
  getall,
  update,
  delete: _delete,
};

function login(username, password) {
  return axios
    .get(
      `${url}?userName=${username}&passWord=${password}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

function register(user) {debugger;
  console.log(url)
  var objUser = {
    FirstName: user.firstname,
    LastName: user.lastname,
    Email: user.email,
    Password: user.password,
    MobileNumber: user.phonenumber,
    DateOfBirth: user.DateOfBirth,
  };
  return axios
    .post(`${url}`, objUser)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
function logout() {
  localStorage.setItem("authUser", {});
  history.push("/login");
}
function getall() {
  var user = JSON.parse(localStorage.getItem("authUser"));
  var tocken = new Buffer(user.username + ":" + user.password);
  return axios
    .get(`${url}`, {
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
    .delete(`${url}?Email=${email}`, {
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
    .put(`${url}`, userData, {
      headers: {
        Authorization: `Basic ${tocken.toString("base64")}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export default services;
