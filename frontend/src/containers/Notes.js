// Redux
import { connect } from "react-redux";
// Actions
import { addItemToPlan, updateItemInPlan, deleteItemInPlan } from "../actions/plans";
// Component
import NotesPanel from "../components/notes/panel";


const mapStateToProps = state => ({
  plan: state.plans.items.find((plan) => plan.id === state.plans.activePlan),
  notes: state.plans.items.find((plan) => plan.id === state.plans.activePlan).notes,
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addItemToPlan("notes", note)),
  deleteNote: id => dispatch(deleteItemInPlan("notes", id)),
  updateNote: note => dispatch(updateItemInPlan("notes", note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesPanel);
