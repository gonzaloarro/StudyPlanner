import React, { useState } from "react";

import Plan from "../plan";
import CustomModal from "../../utils/modal";
import PlanForm from "../planForm";


import {
  Wrapper
} from "./style.js";

export default function PlanList(props) {

  const [modalShow, setModalShow] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});

  function editPlan(plan) {
    const start_date = new Date(plan.date_and_time);
    start_date.setMinutes(start_date.getMinutes()-start_date.getTimezoneOffset());
    const end_date = new Date(plan.date_and_time);
    end_date.setMinutes(end_date.getMinutes()-end_date.getTimezoneOffset()+plan.duration);
    const formPlan = {
      ...plan,
      date: new Date(plan.date_and_time).toISOString().split('T')[0],
      start_time: start_date.toISOString().split('T')[1].slice(0, 5),
      end_time: end_date.toISOString().split('T')[1].slice(0, 5)
    };
    setSelectedPlan(formPlan);
    setModalShow(true);
  }

  function updatePlan(plan) {
    props.updatePlan(plan);
    setModalShow(false);
  }

  function deletePlan(plan) {
    props.deletePlan(plan.id);
    setModalShow(false);
  }

  return (
    <>
      <CustomModal
        show={modalShow}
        close={() => setModalShow(false)}
        size="sm"
        title="Editar plan"
        body=<PlanForm plan={selectedPlan} submit={updatePlan} deletePlan={deletePlan}/>
      />
      <Wrapper>
      {
        props.plans.map((plan) => (
          <Plan
            key={plan.id}
            plan={plan}
            selectPlan={props.selectPlan}
            edit={editPlan}
          />
        ))
      }
      </Wrapper>
    </>

  );
}
