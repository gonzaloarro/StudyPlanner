import * as ACTION_TYPE from "../constants/planActions.js";


const initialState = {
    isLoading: false,
    activePlan: null,
    items: []
}

function addItemToPlan(plans, activePlan, items, item) {
  return plans.map((plan) => (
    plan.id === activePlan ? {
      ...plan,
      [items]: [...plan[items], item]
    } : plan
  ))
}

function updateItemInPlan(plans, activePlan, items, item) {
  return plans.map((plan) => (
    plan.id === activePlan ? {
      ...plan,
      [items]: plan[items].map((listItem) => (
        listItem.id === item.id ? {
          ...listItem,
          ...item
        } : listItem
      ))
    } : plan
  ))
}

function deleteItemInPlan(plans, activePlan, items, itemId) {
  return plans.map((plan) => (
    plan.id === activePlan ? {
      ...plan,
      [items] : plan[items].filter((listItem) => (
        listItem.id !== itemId
      ))
    } : plan
  ))
}

export default function plans(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPE.SELECT_PLAN:
      return {...state, activePlan: action.activePlan};

    case ACTION_TYPE.ADD_PLAN_REQUEST:
    case ACTION_TYPE.FETCH_PLANS_REQUEST:
    case ACTION_TYPE.UPDATE_PLAN_REQUEST:
    case ACTION_TYPE.DELETE_PLAN_REQUEST:
      return {...state, isLoading: true};

    case ACTION_TYPE.ADD_PLAN_SUCCESS:
      return {isLoading: false, items: [...state.items, action.plan]};

    case ACTION_TYPE.FETCH_PLANS_SUCCESS:
      return {isLoading: false, items: action.plans};

    case ACTION_TYPE.UPDATE_PLAN_SUCCESS:
      return {
        isLoading: false,
        items: state.items.map((plan) =>
          plan.id === action.plan.id ? {
            ...plan,
            ...action.plan,
          } : plan)
      };

    case ACTION_TYPE.DELETE_PLAN_SUCCESS:
      return {isLoading: false, items: state.items.filter((plan) => plan.id !== action.id)};


    case ACTION_TYPE.ADD_ITEM_TO_PLAN:
      return {
        ...state,
        items: addItemToPlan(state.items, state.activePlan, action.itemClass, action.item)
      }

    case ACTION_TYPE.UPDATE_ITEM_IN_PLAN:
      return {
        ...state,
        items: updateItemInPlan(state.items, state.activePlan, action.itemClass, action.item)
      }

    case ACTION_TYPE.DELETE_ITEM_IN_PLAN:
      return {
        ...state,
        items: deleteItemInPlan(state.items, state.activePlan, action.itemClass, action.id)
      }

    default:
      return state;
  }
}
