// Redux
import { connect } from "react-redux";
// Actions
import { login } from "../actions/auth";
// Component
import Login from "../components/auth/login";


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
