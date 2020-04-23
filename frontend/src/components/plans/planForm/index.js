// React
import React, { useReducer } from "react";
// React Bootstrap
import { Form, Accordion, Col } from "react-bootstrap";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
// Time Picker
import Timekeeper from "react-timekeeper";
// Styled Components
import {
  StyledInputDate,
  StyledInputTime,
  TimePicker,
  StyledToggle,
  FormFooter,
  Button
} from "./style";


export default function PlanForm(props) {

  // State
  const [formState, setFormState] = useReducer(
    reducer, {
      plan: props.plan,
      isValid: true,
      errors: {
        title: "",
        date: "",
        start_time: "",
        end_time: ""
      }
    }
  );

  function validate(formState) {
    const errors = {
      title: "",
      date: "",
      start_time: "",
      end_time: ""
    };
    var isValid = true;

    if (formState.plan.title === "") {
      errors.title = "El plan de estudio debe tener un título.";
      isValid = false;
    }

    const today = new Date(new Date().setHours(0,0,0,0));
    const planDate = new Date(formState.plan.date);
    planDate.setMinutes(planDate.getMinutes()+planDate.getTimezoneOffset());
    planDate.setHours(0,0,0,0);
    if (planDate.getTime() <= today.getTime()) {
      errors.date = "No se puede asignar una fecha en el pasado.";
      isValid = false;
    }

    const horaInicio = parseInt(formState.plan.start_time.slice(0,2));
    if (horaInicio < 8) {
      errors.start_time = "El examen debe comenzar desde las 08:00hs en adelante.";
      isValid = false;
    }

    const fechaConHoraInicio = new Date(formState.plan.date+"T"+formState.plan.start_time+":00");
    const fechaConHoraFinal = new Date(formState.plan.date+"T"+formState.plan.end_time+":00");
    if (fechaConHoraInicio.getTime() > fechaConHoraFinal.getTime()) {
      errors.end_time = "El examen debe finalizar en una hora posterior a la de inicio.";
      isValid = false;
    }

    return {...formState, isValid: isValid, errors: errors};
  }

  function reducer(state, action) {
    switch(action.type) {
      case 'validate': {
        return validate(state);
      }
      case 'update': {
        return {...state, plan: {...state.plan, [action.field] : action.value}};
      }
      default: {
        return state;
      }
    }
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormState({type: 'update', field: [name], value: value});
    setFormState({type: "validate"});
  };

  const handleTimeChange = (time, time_field) => {
    const formatted_time = time.formatted24.length === 4 ? '0'+time.formatted24 : time.formatted24;
    setFormState({type: 'update', field: [time_field], value: formatted_time});
    setFormState({type: "validate"});
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.isValid) {
      const start_date = new Date(formState.plan.date+"T"+formState.plan.start_time+":00");
      const end_date = new Date(formState.plan.date+"T"+formState.plan.end_time+":00");
      const duration_minutes = (end_date - start_date)/60000;
      const plan = {...formState.plan};
      plan.duration = duration_minutes;
      plan.date_and_time = new Date(formState.plan.date+"T"+formState.plan.start_time+":00").toISOString();
      props.submit(plan);
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Group>
      <Form.Label>Título</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Título"
          maxLength={60}
          value={formState.plan.title}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
      <Form.Label>Fecha de examen</Form.Label>

        <StyledInputDate
          name="date"
          type="date"
          value={formState.plan.date}
          isInvalid={formState.errors.date !== ""}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          {formState.errors.date}
        </Form.Control.Feedback>
      </Form.Group>
      <Accordion>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Hora inicio</Form.Label>
              <Accordion.Toggle as={StyledToggle} eventKey="0">
                <StyledInputTime
                  type="time"
                  isInvalid={formState.errors.start_time !== ""}
                  value={formState.plan.start_time}
                  onChange={() => {return false;}}
                />
                <Form.Control.Feedback type="invalid">
                  {formState.errors.start_time}
                </Form.Control.Feedback>
              </Accordion.Toggle>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Hora final</Form.Label>
              <Accordion.Toggle as={StyledToggle} eventKey="1">
                <StyledInputTime
                  type="time"
                  isInvalid={formState.errors.end_time !== ""}
                  value={formState.plan.end_time}
                  onChange={() => {return false;}}
                />
                <Form.Control.Feedback type="invalid">
                  {formState.errors.end_time}
                </Form.Control.Feedback>
              </Accordion.Toggle>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Accordion.Collapse eventKey="0">
              <TimePicker>
                <Timekeeper
                  time={formState.plan.start_time}
                  onChange={(time) => handleTimeChange(time, "start_time")}
                />
              </TimePicker>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <TimePicker>
                <Timekeeper
                  time={formState.plan.end_time}
                  onChange={(time) => handleTimeChange(time, "end_time")}
                />
              </TimePicker>
            </Accordion.Collapse>
          </Col>
        </Form.Row>
      </Accordion>
      <FormFooter>
        {
          props.deletePlan &&
          <Button type="button" onClick={() => props.deletePlan(formState.plan)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        }
        <Button type="submit" disabled={!formState.isValid}>
          <FontAwesomeIcon icon={faSave} />
        </Button>
      </FormFooter>
    </Form>
  );
}
