import React, { useState, useEffect } from "react";

import CustomModal from "../utils/modal";
import PlanForm from "./planForm";
import Fade from "react-reveal/Fade";

import NavigationBar from "../app/navbar";
import PlanList from "./planList";

import {
  ButtonWrapper,
  NewPlanButton,
} from "./style";

export default function Plans(props) {

  const [modalShow, setModalShow] = useState(false);

  const fetchPlans = props.fetchPlans;

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  function addPlan(plan) {
    props.addPlan(plan);
    setModalShow(false);
  }

  const defaultPlan = {
    title: "",
    date: "",
    start_time: "08:00",
    end_time: "12:00"
  };

  return (
    <>
      <NavigationBar changeTheme={props.changeTheme} logout={props.logout}/>
      <CustomModal
        show={modalShow}
        close={() => setModalShow(false)}
        size="sm"
        title="Plan de estudio"
        body=<PlanForm plan={defaultPlan} submit={addPlan}/>
      />
      <ButtonWrapper>
          <NewPlanButton onClick={() => setModalShow(true)}>
            Crear plan
          </NewPlanButton>
      </ButtonWrapper>
      <Fade>
        <PlanList
          plans={props.plans.items}
          updatePlan={props.updatePlan}
          deletePlan={props.deletePlan}
          selectPlan={props.selectPlan}
        />
      </Fade>
    </>
  );
}
