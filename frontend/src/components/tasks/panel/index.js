// React
import React, { useState } from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
// Components
import CustomModal from "../../utils/modal";
import TaskForm from "../taskForm";
import TaskList from "../taskList";
import SearchBar from "../searchBar";
// StyledComponents
import {
  FilterButtonWrapper,
  Button,
  NoTaskMessage
} from "./style";


export default function TaskPanel(props) {

  const [modalShow, setModalShow] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [taskFilter, setTaskFilter] = useState({completed: false});

  const tasksToDisplay = props.tasks.filter((task) => {
    return task.completed === taskFilter.completed;
  });

  function addTask(task) {
    setModalShow(false);
    props.addTask(task);
  }

  function toggleCompletedFilter() {
    const filter = {
      completed: !taskFilter.completed
    }
    setTaskFilter(filter);
  }

  const defaultTask = {
    description: "",
    category: "Reading",
    priority: "Medium",
    date_and_time: new Date().toISOString(),
    duration: 30,
    plan: props.plan.id
  }

  return (
    <>
      <CustomModal
        show={modalShow}
        close={() => setModalShow(false)}
        size="sm"
        title="Agregar tarea"
        body=<TaskForm handleSubmit={addTask} task={defaultTask}/>
      />
      <Row className="pt-5 pb-3">
        <Col xs={{ span: 4 }} md={{ span: 3, offset: 1}} xl={{span: 2, offset: 2}}>
          <Button onClick={() => setModalShow(true)}>
            Nueva tarea
          </Button>
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 4}} xl={{span: 4}}>
          <SearchBar filterText={filterText} onFilterTextChange={(text) => setFilterText(text)}/>
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 3}} xl={{span: 2}}>
          <FilterButtonWrapper>
            <Button onClick={toggleCompletedFilter}>
              {taskFilter.completed && "Pendientes"}
              {!taskFilter.completed && "Completadas"}
            </Button>
          </FilterButtonWrapper>
        </Col>
      </Row>
      <Row>
        <Col md={{span: 10, offset: 1}} xl={{ span: 8, offset: 2}}>
        {
          tasksToDisplay.length > 0 &&
          <TaskList
            tasks={tasksToDisplay}
            filterText={filterText}
            deleteTask={props.deleteTask}
            updateTask={props.updateTask}
          />
        }
        {
          tasksToDisplay.length === 0 &&
          <NoTaskMessage>
            No hay tareas para mostrar.
          </NoTaskMessage>
        }
        </Col>
      </Row>
    </>
  )
}
