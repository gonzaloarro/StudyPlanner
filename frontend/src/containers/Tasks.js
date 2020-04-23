// Redux
import { connect } from "react-redux";
// Actions
import { addItemToPlan, updateItemInPlan, deleteItemInPlan } from "../actions/plans";
// Component
import TaskPanel from "../components/tasks/panel";


const mapStateToProps = state => ({
  plan: state.plans.items.find((plan) => plan.id === state.plans.activePlan),
  tasks: state.plans.items.find((plan) => plan.id === state.plans.activePlan).tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addItemToPlan("tasks", task)),
  deleteTask: id => dispatch(deleteItemInPlan("tasks", id)),
  updateTask: task => dispatch(updateItemInPlan("tasks", task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskPanel);
