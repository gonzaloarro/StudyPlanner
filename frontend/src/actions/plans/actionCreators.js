import * as ACTION_TYPE from "../../constants/planActions";

// PLANS
export function addPlanRequest() {
  return {
    type: ACTION_TYPE.ADD_PLAN_REQUEST
  }
}

export function addPlanSuccess(plan) {
  return {
    type: ACTION_TYPE.ADD_PLAN_SUCCESS,
    plan
  }
}

export function addPlanFailure(error) {
  return {
    type: ACTION_TYPE.ADD_PLAN_FAILURE,
    error
  }
}

export function fetchPlansRequest() {
  return {
    type: ACTION_TYPE.FETCH_PLANS_REQUEST
  }
}

export function fetchPlansSuccess(plans) {
  return {
    type: ACTION_TYPE.FETCH_PLANS_SUCCESS,
    plans: plans
  }
}

export function fetchPlansFailure(error) {
  return {
    type: ACTION_TYPE.FETCH_PLANS_FAILURE,
    error
  }
}

export function updatePlanRequest() {
  return {
    type: ACTION_TYPE.UPDATE_PLAN_REQUEST
  }
}

export function updatePlanSuccess(plan) {
  return {
    type: ACTION_TYPE.UPDATE_PLAN_SUCCESS,
    plan
  }
}

export function updatePlanFailure(error) {
  return {
    type: ACTION_TYPE.UPDATE_PLAN_FAILURE,
    error
  }
}

export function deletePlanRequest() {
  return {
    type: ACTION_TYPE.DELETE_PLAN_REQUEST
  }
}

export function deletePlanSuccess(id) {
  return {
    type: ACTION_TYPE.DELETE_PLAN_SUCCESS,
    id
  }
}

export function deletePlanFailure(error) {
  return {
    type: ACTION_TYPE.DELETE_PLAN_FAILURE,
    error
  }
}

export function selectPlanAction(activePlan) {
  return {
    type: ACTION_TYPE.SELECT_PLAN,
    activePlan
  }
}

// ITEMS
export function addItemToPlanSuccess(itemClass, item) {
  return {
    type: ACTION_TYPE.ADD_ITEM_TO_PLAN,
    itemClass,
    item
  }
}

export function updateItemInPlanSuccess(itemClass, item) {
  return {
    type: ACTION_TYPE.UPDATE_ITEM_IN_PLAN,
    itemClass,
    item
  }
}

export function deleteItemInPlanSuccess(itemClass, id) {
  return {
    type: ACTION_TYPE.DELETE_ITEM_IN_PLAN,
    itemClass,
    id
  }
}
