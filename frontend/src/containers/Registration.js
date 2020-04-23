// Redux
import { connect } from "react-redux";
// Actions
import { register, clearErrors } from "../actions/auth";
// Component
import Registration from "../components/auth/registration";


const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  register: (username, password) => dispatch(register(username, password)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
