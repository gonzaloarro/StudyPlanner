import * as ACTION_TYPE from '../constants/authActions.js'


const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  errors: {}
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.LOAD_USER_REQUEST:
    case ACTION_TYPE.LOGIN_REQUEST:
    case ACTION_TYPE.REGISTER_REQUEST:
    case ACTION_TYPE.LOGOUT_REQUEST:
      return {...state, isLoading: true};

    case ACTION_TYPE.LOAD_USER_SUCCESS:
      return {...state, isAuthenticated: true, isLoading: false, user: action.user};

    case ACTION_TYPE.LOGIN_SUCCESS:
    case ACTION_TYPE.REGISTER_SUCCESS:
      localStorage.setItem("token", action.data.token);
      return {token: action.data.token, isAuthenticated: true, isLoading: false, user: action.data.user, errors: {}};

    case ACTION_TYPE.LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {...state, isAuthenticated: false, isLoading: false, user: null};

    case ACTION_TYPE.LOAD_USER_FAILURE:
    case ACTION_TYPE.LOGIN_FAILURE:
    case ACTION_TYPE.REGISTER_FAILURE:
    case ACTION_TYPE.LOGOUT_FAILURE:
      return {...state, isAuthenticated: false, isLoading: false, errors: action.error};

    case ACTION_TYPE.CLEAR_AUTH_ERRORS:
      return {...state, errors: {}};

    default:
      return state;
  }
}
