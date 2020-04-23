// Redux
import { connect } from "react-redux";
// Actions
import { fetchPlans, selectPlan, addPlan, updatePlan, deletePlan } from "../actions/plans";
import { changeTheme } from "../actions/theme";
import { logout } from "../actions/auth";
// Component
import Plans from "../components/plans";


const mapStateToProps = state => ({
  plans: state.plans
});

const mapDispatchToProps = dispatch => ({
  fetchPlans: () => dispatch(fetchPlans()),
  selectPlan: (plan) => dispatch(selectPlan(plan)),
  addPlan: (plan) => dispatch(addPlan(plan)),
  updatePlan: (plan) => dispatch(updatePlan(plan)),
  deletePlan: (id) => dispatch(deletePlan(id)),
  changeTheme: () => dispatch(changeTheme()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plans);
