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


export default function EventForm(props) {

  // State
  const [formState, setFormState] = useReducer(
    reducer, {
      event: props.event,
      isValid: true,
      errors: {
        title: "",
        start_time: "",
        end_time: ""
      }
    }
  );

  function validate(formState) {
    const errors = {
      title: "",
      start_time: "",
      end_time: ""
    };
    var isValid = true;

    if (formState.event.title === "") {
      errors.title = "El evento debe tener un título.";
      isValid = false;
    }

    const horaInicio = parseInt(formState.event.start_time.slice(0,2));
    if (horaInicio < 8) {
      errors.start_time = "El evento debe comenzar desde las 08:00hs en adelante.";
      isValid = false;
    }

    const fechaConHoraInicio = new Date(formState.event.date+"T"+formState.event.start_time+":00");
    const fechaConHoraFinal = new Date(formState.event.date+"T"+formState.event.end_time+":00");
    if (fechaConHoraInicio.getTime() > fechaConHoraFinal.getTime()) {
      errors.end_time = "El evento debe finalizar en una hora posterior a la de inicio.";
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
        return {...state, event: {...state.event, [action.field] : action.value}};
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
      const start_date = new Date(formState.event.date+"T"+formState.event.start_time+":00");
      const end_date = new Date(formState.event.date+"T"+formState.event.end_time+":00");
      const duration_minutes = (end_date - start_date)/60000;
      const calendarEvent = {...formState.event};
      calendarEvent.duration = duration_minutes;
      calendarEvent.date = new Date(formState.event.date+"T"+formState.event.start_time+":00").toISOString();
      props.submit(calendarEvent);
    }
  };


  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Título"
              maxLength={60}
              isInvalid={formState.errors.title !== ""}
              value={formState.event.title}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              {formState.errors.title}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <StyledInputDate
              name="date"
              type="date"
              value={formState.event.date}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Accordion>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Hora inicio</Form.Label>
              <Accordion.Toggle as={StyledToggle} eventKey="0">
                <StyledInputTime
                  type="time"
                  isInvalid={formState.errors.start_time !== ""}
                  value={formState.event.start_time}
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
                  value={formState.event.end_time}
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
                  time={formState.event.start_time}
                  onChange={(time) => handleTimeChange(time, "start_time")}
                />
              </TimePicker>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <TimePicker>
                <Timekeeper
                  time={formState.event.end_time}
                  onChange={(time) => handleTimeChange(time, "end_time")}
                />
              </TimePicker>
            </Accordion.Collapse>
          </Col>
        </Form.Row>
      </Accordion>
      <FormFooter>
        {
          props.deleteEvent &&
          <Button type="button" onClick={() => props.deleteEvent(formState.event.id)}>
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
