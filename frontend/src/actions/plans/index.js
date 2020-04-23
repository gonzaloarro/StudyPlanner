import axios from "axios";

import * as ACTION from "./actionCreators";
import * as SERVER from "../../constants/server";
import { getAxiosConfig } from "../utils";


// PLANS
export function addPlan(plan) {
  return function(dispatch, getState) {
    dispatch(ACTION.addPlanRequest());
    return axios.post(SERVER.API_URL+"plans/", plan, getAxiosConfig(getState))
      .then(response => dispatch(ACTION.addPlanSuccess(response.data)))
      .catch(error => dispatch(ACTION.addPlanFailure(error.response.data)))
  }
}

export function fetchPlans() {
  return function(dispatch, getState) {
    dispatch(ACTION.fetchPlansRequest());
    return axios.get(SERVER.API_URL+"plans/", getAxiosConfig(getState))
      .then(response => dispatch(ACTION.fetchPlansSuccess(response.data)))
      .catch(error => dispatch(ACTION.fetchPlansFailure(error.response.data)))
  }
}


export function updatePlan(plan) {
  return function(dispatch, getState) {
    dispatch(ACTION.updatePlanRequest());
    return axios.put(SERVER.API_URL+"plans/"+plan.id+"/", plan, getAxiosConfig(getState))
      .then(response => dispatch(ACTION.updatePlanSuccess(plan)))
      .catch(error => dispatch(ACTION.updatePlanFailure(error.response.data)))
  }
}

export function deletePlan(id) {
  return function(dispatch, getState) {
    dispatch(ACTION.deletePlanRequest());
    return axios.delete(SERVER.API_URL+"plans/"+id+"/", getAxiosConfig(getState))
      .then(response => dispatch(ACTION.deletePlanSuccess(id)))
      .catch(error => dispatch(ACTION.deletePlanFailure(error.response.data)))
  }
}

export function selectPlan(selectedPlan) {
    return function(dispatch) {
      dispatch(ACTION.selectPlanAction(selectedPlan));
    }
}

// ITEMS
export function addItemToPlan(itemClass, item) {
  return function(dispatch, getState) {
    return axios.post(SERVER.API_URL+itemClass+"/", item, getAxiosConfig(getState))
      .then(response => dispatch(ACTION.addItemToPlanSuccess(itemClass, response.data)))
      .catch(error => {throw error})  }
}

export function updateItemInPlan(itemClass, item) {
  return function(dispatch, getState) {
    return axios.put(SERVER.API_URL+itemClass+"/"+item.id+"/", item, getAxiosConfig(getState))
      .then(response => dispatch(ACTION.updateItemInPlanSuccess(itemClass, item)))
      .catch(error => {throw error})
  }
}

export function deleteItemInPlan(itemClass, id) {
  return function(dispatch, getState) {
    return axios.delete(SERVER.API_URL+itemClass+"/"+id+"/", getAxiosConfig(getState))
      .then(response => dispatch(ACTION.deleteItemInPlanSuccess(itemClass, id)))
      .catch(error => {throw error})
  }
}
