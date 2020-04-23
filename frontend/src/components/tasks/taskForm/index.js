// React
import React, { useReducer } from "react";
// React Bootstrap
import { Col, Form, Accordion } from "react-bootstrap";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
// Timekeeper
import Timekeeper from 'react-timekeeper';
// Styled Components
import {
  TimePicker,
  StyledToggle,
  StyledInputDate,
  StyledInputTime,
  FormFooter,
  Button
} from "./style";


export default function TaskForm(props) {

  function getErrors(formState) {
    const errors = {
      duration: "",
      date: "",
      start_time: ""
    };
    var isValid = true;

    if (formState.task.duration < 15 || formState.task.duration > 120) {
      errors.duration = "La duración debe estar entre 15 y 120 minutos.";
      isValid = false;
    }

    const today = new Date(new Date().setHours(0,0,0,0));
    const task_date = new Date(formState.task.date);
    task_date.setMinutes(task_date.getMinutes()+task_date.getTimezoneOffset());
    task_date.setHours(0,0,0,0);
    if (task_date.getTime() < today.getTime()) {
      errors.date = "No se puede asignar una fecha en el pasado.";
      isValid = false;
    }

    if (task_date.getTime() === today.getTime()) {
      const task_date_and_time = new Date(formState.task.date+"T"+formState.task.start_time+":00");
      const now = new Date();
      if (task_date_and_time.getTime() < now.getTime()) {
        errors.start_time = "Se debe asignar un horario futuro.";
        isValid = false;
      }
    }

    return Object.assign({}, formState, {
      isValid: isValid,
      errors: errors
    });
  }

  function reducer(state, action) {
    switch(action.type) {
      case 'validate': {
        return Object.assign({}, state, getErrors(state));
      }
      case 'update': {
        const newTask = Object.assign({}, state.task, {
          [action.field] : action.value
        })
        return Object.assign({}, state, {
          task: newTask
        })
      }
      default: {
        return state;
      }
    }
  }

  const [formState, setFormState] = useReducer(
    reducer, {
      task: {
        id: props.task.id,
        description: props.task.description,
        category: props.task.category,
        date: props.task.date_and_time.split('T')[0],
        priority: props.task.priority,
        start_time: props.task.date_and_time.split('T')[1].slice(0, 5),
        duration: props.task.duration,
        plan: props.task.plan
      },
      isValid: true,
      errors: {
        duration: "",
        date: "",
        start_time: ""
      }
    }
  );

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormState({type: 'update', field: [name], value: value});
    setFormState({type: "validate"});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.isValid) {
      const task = Object.assign({}, formState.task);
      task.date_and_time = new Date(formState.task.date+"T"+formState.task.start_time+":00").toISOString();
      props.handleSubmit(task);
    }
  };

  function handleTimeChange(time) {
    const formatted_time = time.formatted24.length === 4 ? '0'+time.formatted24 : time.formatted24;
    setFormState({type: 'update', field: "start_time", value: formatted_time});
    setFormState({type: "validate"});
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Row>
        <Col md={12}>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder="Descripción"
              maxLength={50}
              value={formState.task.description}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control name="category" as="select" value={formState.task.category} onChange={handleInputChange}>
              <option value="Reading">Lectura</option>
              <option value="Problem Solving">Ejercicio</option>
              <option value="Summarize">Resumir</option>
              <option value="Group Study">Estudio en Grupo</option>
              <option value="Concept Map">Red Conceptual</option>
              <option value="Exam Simulation">Simular Examen</option>
              <option value="Topic Review">Repaso</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col md={7}>
          <Form.Group>
            <Form.Label>Fecha asignada</Form.Label>
            <StyledInputDate
              name="date"
              type="date"
              required="required"
              value={formState.task.date}
              isInvalid={formState.errors.date !== ""}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              {formState.errors.date}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group>
            <Form.Label>Prioridad</Form.Label>
            <Form.Control name="priority" as="select" value={formState.task.priority} onChange={handleInputChange}>
              <option value="Low">Baja</option>
              <option value="Medium">Media</option>
              <option value="High">Alta</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>

        <Accordion>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Hora</Form.Label>
                <Accordion.Toggle as={StyledToggle} eventKey="0">
                  <StyledInputTime
                    type="time"
                    value={formState.task.start_time}
                    onChange={() => {return false;}}
                    isInvalid={formState.errors.start_time !== ""}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.start_time}
                  </Form.Control.Feedback>
                </Accordion.Toggle>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Duración(min.)</Form.Label>
                <Form.Control
                  name="duration"
                  min="15"
                  max="120"
                  step="15"
                  type="number"
                  value={formState.task.duration}
                  onChange={handleInputChange}
                  isInvalid={formState.errors.duration !== ""}
                />
                <Form.Control.Feedback type="invalid">
                  {formState.errors.duration}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Accordion.Collapse eventKey="0">
              <TimePicker>
                <Timekeeper
                  time={formState.task.start_time}
                  onChange={handleTimeChange}
                />
              </TimePicker>
            </Accordion.Collapse>
          </Form.Row>
        </Accordion>
        <FormFooter>
          {
            props.deleteTask &&
            <Button type="button" onClick={() => props.deleteTask(formState.task.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          }
          <Button type="submit" disabled={!formState.isValid}>
            <FontAwesomeIcon icon={faSave} />
          </Button>
        </FormFooter>
    </Form>
  )
}
