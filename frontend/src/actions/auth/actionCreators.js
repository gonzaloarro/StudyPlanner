import * as ACTION_TYPE from "../../constants/authActions";

export function loadUserRequest() {
  return {
    type: ACTION_TYPE.LOAD_USER_REQUEST
  }
}

export function loadUserSuccess(user) {
  return {
    type: ACTION_TYPE.LOAD_USER_SUCCESS,
    user
  }
}

export function loadUserFailure(error) {
  return {
    type: ACTION_TYPE.LOAD_USER_FAILURE,
    error
  }
}

export function loginRequest() {
  return {
    type: ACTION_TYPE.LOGIN_REQUEST
  }
}

export function loginSuccess(data) {
  return {
    type: ACTION_TYPE.LOGIN_SUCCESS,
    data
  }
}

export function loginFailure(error) {
  return {
    type: ACTION_TYPE.LOGIN_FAILURE,
    error
  }
}

export function registerRequest() {
  return {
    type: ACTION_TYPE.REGISTER_REQUEST
  }
}

export function registerSuccess(data) {
  return {
    type: ACTION_TYPE.REGISTER_SUCCESS,
    data
  }
}

export function registerFailure(error) {
  return {
    type: ACTION_TYPE.REGISTER_FAILURE,
    error
  }
}

export function logoutRequest() {
  return {
    type: ACTION_TYPE.LOGOUT_REQUEST
  }
}

export function logoutSuccess() {
  return {
    type: ACTION_TYPE.LOGOUT_SUCCESS
  }
}

export function logoutFailure(error) {
  return {
    type: ACTION_TYPE.LOGOUT_FAILURE,
    error
  }
}

export function clearErrors() {
  return {
    type: ACTION_TYPE.CLEAR_AUTH_ERRORS
  }
}
