const redux = require("redux");
const thunkmiddleWare = require("redux-thunk").default;
const axios = require("axios");

const CreateStore = redux.createStore;
const appMiddleWare = redux.applyMiddleware;

const initialState = {
  error: "",
  loading: true,
  users: [],
};

const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
    payload: [],
  };
};

const fetchSuccess = (users) => {
  return {
    type: "FETCH_SUCCESS",
    payload: users,
  };
};

const fetchFail = (error) => {
  return {
    type: "FETCH_FAIL",
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        users: [],
        loading: true,
        error: "",
      };
    case "FETCH_SUCCESS":
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_FAIL":
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/psts")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchFail(err.response.statusText));
      });
  };
};

const store = CreateStore(reducer, appMiddleWare(thunkmiddleWare));
const subscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
