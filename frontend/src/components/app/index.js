// React
import React from "react";
// React Router
import {  Switch, Route, useLocation } from "react-router-dom";
// Bootstrap
import { Row, Col } from "react-bootstrap";
// Transitions/Animations
import { CSSTransition } from "react-transition-group";
// Components
import NavigationBar from "./navbar";
import SideMenu from "./sideMenu";
import DashboardPanel from "../../containers/Dashboard";
import Calendar from "../../containers/Calendar";
import Notes from "../../containers/Notes";
import Tasks from "../../containers/Tasks";

// Styled Components
import {
  Wrapper,
  Content,
  TransitionGroupWrapper
} from "./style";



export default function App(props) {

  const location = useLocation();


  return (
    <>
        <NavigationBar changeTheme={props.changeTheme} logout={props.logout} selectPlan={props.selectPlan} withMenu/>
        <SideMenu/>
        <Wrapper fluid={true}>
          <Row>
            <Col xs={{ span: 12 }} lg={{ span: 11, offset: 1 }}>
              <TransitionGroupWrapper>
                <CSSTransition
                  key={location.key}
                  classNames="panel"
                  timeout={{ enter: 300, exit: 300 }}
                >
                  <Content>
                    <Switch location={location}>
                      <Route path="/tareas" component={Tasks} />
                      <Route path="/calendario" component={Calendar} />
                      <Route path="/notas" component={Notes} />
                      <Route path="/" component={DashboardPanel} />
                    </Switch>
                  </Content>
                </CSSTransition>
              </TransitionGroupWrapper>
            </Col>
          </Row>
        </Wrapper>
    </>
  )
}
