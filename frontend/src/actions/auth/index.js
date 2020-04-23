import axios from "axios";

import * as ACTION from "./actionCreators";
import * as SERVER from "../../constants/server";
import { getAxiosConfig } from "../utils";


export function loadUser() {
  return function(dispatch, getState) {
    dispatch(ACTION.loadUserRequest());
    return axios.get(SERVER.BASE_URL+"user/", getAxiosConfig(getState))
      .then(response => dispatch(ACTION.loadUserSuccess(response.data)))
      .catch(error => dispatch(ACTION.loadUserFailure(error.response.data)))
  }
}

export function login(username, password) {
  return function(dispatch, getState) {
    dispatch(ACTION.loginRequest());
    let config = {
      headers: {
        "Content-Type": "application/json",
      }
    };
    let body = JSON.stringify({username, password});
    return axios.post(SERVER.BASE_URL+"login/", body, {headers: config.headers})
      .then(response => dispatch(ACTION.loginSuccess(response.data)))
      .catch(error => dispatch(ACTION.loginFailure(error.response.data)))
  }
}

export function register(username, password) {
  return function(dispatch, getState) {
    dispatch(ACTION.registerRequest());
    let config = {
      headers: {
        "Content-Type": "application/json",
      }
    };
    let body = JSON.stringify({username, password});
    return axios.post(SERVER.BASE_URL+"register/", body, {headers: config.headers})
      .then(response => dispatch(ACTION.registerSuccess(response.data)))
      .catch(error => dispatch(ACTION.registerFailure(error.response.data)))
  }
}

export function logout() {
  return function(dispatch, getState) {
    dispatch(ACTION.logoutRequest());
    return axios.post(SERVER.BASE_URL+"logout/", {}, getAxiosConfig(getState))
      .then(response => dispatch(ACTION.logoutSuccess()))
      .catch(error => dispatch(ACTION.logoutFailure(error.response.data)))
  }
}

/*
This action is to clean server errors on the register form
after the user has typed something new.
*/
export function clearErrors() {
  return function(dispatch) {
    dispatch(ACTION.clearErrors());
  }
}
