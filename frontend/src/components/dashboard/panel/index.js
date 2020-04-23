// Imports
import React from 'react';
import { Col } from "react-bootstrap";

// Local modules
import LastWeekInfo from '../lastWeekInfo';
import TaskCompletionInfo from '../taskCompletionInfo';
import TaskCategoryInfo from '../taskCategoryInfo';
import TaskPriorityInfo from '../taskPriorityInfo';
import ProgressInformation from '../progressInfo';
import ExamInfo from '../examInfo';
import 'react-circular-progressbar/dist/styles.css';

import {
  DashboardRow,
  Title,
} from './style';

import Zoom from 'react-reveal/Zoom';

// Components
export default function DashboardPanel(props) {

  return (
    <>
      <DashboardRow>
        <Col>
          <Title>{props.plan.title}</Title>
        </Col>
      </DashboardRow>
      <DashboardRow>
        <Col xs={{ span:12 }}>
        <Zoom>
          <ProgressInformation tasks={props.tasks}/>
          </Zoom>
        </Col>
      </DashboardRow>

      <DashboardRow>
        <Col sm={{ span:12 }} lg={{span: 10, offset: 1}}>
          <Zoom>
            <ExamInfo plan={props.plan} />
          </Zoom>
        </Col>
      </DashboardRow>

      {
        props.tasks.length > 0 &&
        <DashboardRow>
          <Col  xs={{span: 12}} sm={{ span: 10, offset: 1}} md={{ span: 8, offset: 2 }} xl={{span: 6, offset:3}}>
            <Zoom>
              <LastWeekInfo tasks={props.tasks}/>
            </Zoom>
          </Col>
        </DashboardRow>
      }
      {
        props.tasks.length > 0 &&
        <DashboardRow>
          <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{span: 4, offset: 0}}>
            <Zoom>
              <TaskPriorityInfo tasks={props.tasks}/>
            </Zoom>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{span: 4, offset: 0}}>
            <Zoom>
              <TaskCompletionInfo tasks={props.tasks}/>
            </Zoom>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{span: 4, offset: 0}}>
            <Zoom>
              <TaskCategoryInfo tasks={props.tasks}/>
            </Zoom>
          </Col>
        </DashboardRow>
      }
    </>
  );
}
