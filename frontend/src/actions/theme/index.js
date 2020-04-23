import * as ACTION from "./actionCreators";

export function changeTheme() {
  return function(dispatch) {
    dispatch(ACTION.changeTheme());
  }
}
