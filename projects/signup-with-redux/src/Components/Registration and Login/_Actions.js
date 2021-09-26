import { userContraints, alertContraints } from "./_Contrains";
import services from "./_ApiServices";
import history from "./History";

export const userActions = {
  register,
  login,
  logout,
  alertAction,
  getUsers,
  updateUser,
  deleteUser,
};
function register(user) {
  return (dispatch) => {
    dispatch(request(user));
    services.register(user).then(
      (res) => {
        if (res) {
          if (res.response && res.response.Code > 0) {
            dispatch(sucess(res));
            dispatch(RegisterAction(res, "login"));
          } else {
            dispatch(failure(res));
            dispatch(alertAction(res));
          }
        }
      },
      (error) => {
        dispatch(alertAction(error));
      }
    );
  };

  function request(user) {
    return {
      type: userContraints.REGISTER_REQUEST,
      ...user,
    };
  }
  function sucess(response) {
    return {
      type: userContraints.REGISTER_SUCCESS,
      ...response,
    };
  }
  function failure(response) {
    return {
      type: userContraints.REGISTER_FAILED,
      ...response,
    };
  }
}
function login(username, password) {
  return (dispatch) => {
    dispatch(request(username));
    services.login(username, password).then(
      (res) => {
        if (res.response && res.response.Code > 0) {
          localStorage.setItem(
            "authUser",
            JSON.stringify({
              isauthorized: true,
              username: username,
              password: password,
            })
          );
          dispatch(RegisterAction(res, "dashboard"));
        } else {
          dispatch(failure(res));
          dispatch(alertAction(res));
        }
      },
      (err) => {
        dispatch(alertAction(err));
      }
    );
  };

  function request(res) {
    return {
      type: userContraints.LOGIN_REQUEST,
      res,
    };
  }
  function success(res) {
    return {
      type: userContraints.LOGIN_SUCCESS,
      ...res,
    };
  }
  function failure(res) {
    return {
      type: userContraints.LOGIN_FAILED,
      ...res,
    };
  }
}
function RegisterAction(message, routeName, timeout = 2000) {
  debugger;
  return (dispatch) => {
    dispatch(alertsucess(message));
    setTimeout(() => {
      dispatch(alertClear(message));
      history.push("/" + routeName);
    }, timeout);
  };
}
function alertAction(message, timeout = 3000) {
  debugger;
  return (dispatch) => {
    dispatch(alertsucess(message));
    setTimeout(() => {
      dispatch(alertClear(message));
    }, timeout);
  };
}
function alertClear(res) {
  return {
    type: alertContraints.CLEAR,
    response: { type: "success", ...res },
  };
}
function alertsucess(res) {
  return {
    type: alertContraints.SUCESS,
    ...res,
  };
}
function getUsers() {
  return (dispatch) => {
    dispatch(request);
    services
      .getall()
      .then((res) => {
        dispatch(sucess(res));
        dispatch(alertAction(res));
      })
      .catch((err) => {
        dispatch(failed(err));
      });
  };
  function request() {
    return { type: userContraints.GET_REQUEST, loading: true };
  }
  function sucess(users) {
    return { type: userContraints.GET_SUCCESS, ...users };
  }
  function failed(error) {
    return { type: userContraints.GET_FAILED, error };
  }
}
function deleteUser(email) {
  return (dispatch) => {
    dispatch(request);
    services
      .delete(email)
      .then((res) => {
        dispatch(success(res));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
  function request() {
    return { type: userContraints.DELETE_REQUEST };
  }
  function success(response) {
    return {
      type: userContraints.DELETE_SUCCESS,
      ...response,
    };
  }
  function failure(err) {
    return { type: userContraints.DELETE_FAILED, error: err };
  }
}
function updateUser(user) {
  return (dispatch) => {
    dispatch(request(user));
    services
      .update(user)
      .then((res) => {
        dispatch(success(res));
        dispatch(alertAction(res));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };

  function request(user) {
    return { type: userContraints.UPDATE_REQUEST, user };
  }

  function success(res) {
    return { type: userContraints.UPDATE_SUCCESS, ...res };
  }

  function failure(err) {
    return { type: userContraints.UPDATE_FAILED, err };
  }
}
function logout() {
  services.logout();
  return { type: userContraints.LOGOUT };
}
