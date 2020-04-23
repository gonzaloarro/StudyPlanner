// Redux
import { connect } from "react-redux";
// Actions
import { addItemToPlan, updateItemInPlan, deleteItemInPlan } from "../actions/plans";
// Component
import CalendarPanel from "../components/calendar/panel";


const mapStateToProps = state => ({
  plan: state.plans.items.find((plan) => plan.id === state.plans.activePlan),
  events: state.plans.items.find((plan) => plan.id === state.plans.activePlan).events,
  tasks: state.plans.items.find((plan) => plan.id === state.plans.activePlan).tasks,
});

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addItemToPlan("events", event)),
  deleteEvent: id => dispatch(deleteItemInPlan("events", id)),
  updateEvent: event => dispatch(updateItemInPlan("events", event)),
  updateTask: task => dispatch(updateItemInPlan("tasks", task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarPanel);
