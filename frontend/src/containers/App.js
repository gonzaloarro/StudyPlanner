// Redux
import { connect } from "react-redux";
// Actions
import { logout } from "../actions/auth";
import { changeTheme } from "../actions/theme";
import { selectPlan } from "../actions/plans";
// Component
import App from "../components/app";


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  changeTheme: () => dispatch(changeTheme()),
  selectPlan: (plan) => dispatch(selectPlan(plan))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
