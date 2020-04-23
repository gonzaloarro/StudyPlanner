// React
import React from "react";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faEdit } from "@fortawesome/free-solid-svg-icons";

// Styled Components
import {
  StyledPlan,
  Header,
  Content,
  Title,
  Footer,
  EditButton
} from "./style";


export default function Plan(props) {

  function edit(event, plan) {
    event.stopPropagation();
    props.edit(plan);
  }

  return (
    <StyledPlan onClick={() => props.selectPlan(props.plan.id)}>
      <Header>
        <FontAwesomeIcon icon={faUserGraduate}/>
      </Header>
      <Content>
        <Title>{props.plan.title}</Title>
      </Content>
      <Footer>
        <EditButton onClick={(event) => edit(event, props.plan)}>
          <FontAwesomeIcon icon={faEdit}/>
        </EditButton>
      </Footer>
    </StyledPlan>
  )
}
