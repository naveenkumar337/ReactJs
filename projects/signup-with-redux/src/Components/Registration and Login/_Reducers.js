import { userContraints, alertContraints } from "./_Contrains";
import { combineReducers } from "redux";
import {PropTypes} from 'prop-types'
const initialState={
  users:PropTypes.array,
  user:{
    FirstName:PropTypes.string,
    LastName:PropTypes.string,
    Email: PropTypes.string,
    MobileNumber: PropTypes.number,
    Password: PropTypes.string,
    DateOfBirth:PropTypes.string
  },
  Message:{
    Code:PropTypes.number,
    message:PropTypes.string,
    alert_type:PropTypes.string
  }
}

function register_reducer(state = initialState, {type,response,result}) {
  switch (type) {
    case userContraints.REGISTER_REQUEST:
      return {
        ...state,
        registering: true,
      };
    case userContraints.REGISTER_SUCCESS:
      return { 
        state:{
          users:[],
          user:null,    
          Message:{
            Code:response.Code,
            message:response.Message
          }     
        }
       };
    case userContraints.REGISTER_FAILED:
      return {};
    default:
      return state;
  }
}

function login_reducer(state = initialState, {type,response,result}) {
  console.log(result);
  switch (type) {
    case userContraints.LOGIN_REQUEST:
      return {
        logingIn: true,
      };
    case userContraints.LOGIN_SUCCESS:
      return {
        ...state
      };
    case userContraints.LOGIN_FAILED:
      return {
        ...state,
        Message:{
          Code:response.Code,
          message:response.Message
        }
      };
    case userContraints.LOGOUT:
      return {};
    default:
      return state;
  }
}

function alert_reducer(state = initialState, {type,response,result}) {
  debugger;
  switch (type) {
    case alertContraints.SUCESS:
      return {
          ...state,
          Message:{
            Code:response.Code,
            message:response.Message,
            alert_type:response.Code===1?"success":"danger"
        }
      };
    case alertContraints.ERROR:
      return {
        ...state,
        Message:{
          Code:response.Code,
          message:response.Message,
          alert_type:"danger"
      }
    };
    case alertContraints.CLEAR:
      return { ...state,
        Message:null};
    default:
      return state;
  }
}

function dashboard_reducer(state = initialState, {type,response,result}) {
  switch (type) {
    case userContraints.GET_REQUEST:
      return {
        loading: true,
      };
    case userContraints.GET_SUCCESS:
      console.log(result)
      return {
        ...state,        
        users: result,
      };
    case userContraints.GET_FAILED: 
      return {
        ...state,        
        users: result,
        Message:{Code:response.Code,message:response.Message}
          };
    case userContraints.DELETE_REQUEST:
      return {
        ...state,        
        users: result,        
          };
    case userContraints.DELETE_SUCCESS:
      return {
        ...state,        
        users: result,
          };
    case userContraints.DELETE_FAILED:
      return {
        ...state,        
        users: result,
        Message:{Code:response.Code,message:response.Message}
          };
    case userContraints.UPDATE_REQUEST:
      return {
        ...state,        
        users: result,
          };
    case userContraints.UPDATE_SUCCESS:
      return {
        ...state,        
        users: result,
          };
    case userContraints.UPDATE_FAILED:
      return {
        ...state,        
        users: result,
        Message:{Code:response.Code,message:response.Message}
          };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  register_reducer,
  login_reducer,
  dashboard_reducer,
  alert_reducer,
});

export default rootReducer;
