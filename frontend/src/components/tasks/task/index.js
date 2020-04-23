// React
import React from "react";
// React Bootstrap
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUsers,
  faSearch,
  faSitemap,
  faHighlighter,
  faCalculator,
  faUserEdit,
  faCircle,
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
// Styled Components
import {
  StyledTask,
  Priority,
  StyledCategory,
  StyledDescription,
  StyledDate,
  StyledTime,
  Button
} from "./style";


export default function Task(props) {

  function toggleComplete() {
    const task = {
      ...props.task,
      completed: !props.task.completed
    };
    if (task.completed) {
      task.completed_at = new Date();
    }
    else {
      task.completed_at = null;
    }
    props.updateTask(task);
  }

  let isExpired = false;
  if (!props.task.completed) {
    const taskDate = new Date(props.task.date_and_time);
    const now = new Date();
    if (taskDate.getTime() < now.getTime()) {
      isExpired = true;
    }
  }

  const buttonIcon = props.task.completed ? faCheckCircle : faTimesCircle;
  const buttonTooltip = props.task.completed ? "Marcar como pendiente" : "Marcar como completada";

  return (
    <StyledTask onClick={() => {props.onClick(props.task)}}>
      <TaskPriority priority={props.task.priority} />
      <StyledCategory>
        <TaskIcon category={props.task.category}/>
      </StyledCategory>
      <StyledDescription>
         {props.task.description}
      </StyledDescription>
      <StyledDate>
        {
          isExpired &&
          <FontAwesomeIcon icon={faExclamationTriangle} color="red"/>
        }
        <TaskDate date={props.task.date_and_time} />
      </StyledDate>
      <StyledTime>
        <TaskTime task={props.task} />
      </StyledTime>
      <OverlayTrigger
        placement="right"
        delay={{ show: 500, hide: 300 }}
        trigger={["hover", "focus"]}
        overlay={ <Tooltip>{buttonTooltip}</Tooltip> }
      >
        <Button onClick={toggleComplete} completed={props.task.completed}>
          <FontAwesomeIcon icon={buttonIcon}/>
        </Button>
      </OverlayTrigger>
    </StyledTask>
  )
}

function TaskIcon(props) {
  var icon_map = new Map();

  icon_map.set("Reading", faBook);
  icon_map.set("Problem Solving", faCalculator);
  icon_map.set("Group Study", faUsers);
  icon_map.set("Summarize", faHighlighter);
  icon_map.set("Concept Map", faSitemap);
  icon_map.set("Topic Review", faSearch);
  icon_map.set("Exam Simulation", faUserEdit);

  let categoryIcon = icon_map.get(props.category);

  return (
    <FontAwesomeIcon icon={categoryIcon} />
  )
}

function TaskPriority(props) {

  return (
    <Priority priority={props.priority}>
      <FontAwesomeIcon icon={faCircle} />
    </Priority>
  )
}

function TaskDate(props) {
  const months = [
    'Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
  ]
  const days= [
    'Domingo', 'Lunes', 'Martes',
    'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ]

  let date = new Date(props.date);

  return (
    <>
      {days[date.getDay()]+" "+date.getDate()+" "+months[date.getMonth()]}
    </>
  )
}

function TaskTime(props) {
  const start_date = new Date(props.task.date_and_time);
  start_date.setMinutes(start_date.getMinutes()-start_date.getTimezoneOffset());
  const start_time = start_date.toISOString().split('T')[1].slice(0, 5);
  const end_date = new Date(start_date.setMinutes(start_date.getMinutes()+props.task.duration));
  const end_time = end_date.toISOString().split('T')[1].slice(0, 5);
  return (
    <>
      {start_time}-{end_time}
    </>
  );
}
