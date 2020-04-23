// Redux
import { connect } from "react-redux";
// Component
import DashboardPanel from "../components/dashboard/panel";

const mapStateToProps = state => ({
  plan: state.plans.items.find((plan) => plan.id === state.plans.activePlan),
  notes: state.plans.items.find((plan) => plan.id === state.plans.activePlan).notes,
  events: state.plans.items.find((plan) => plan.id === state.plans.activePlan).events,
  tasks: state.plans.items.find((plan) => plan.id === state.plans.activePlan).tasks,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPanel);
