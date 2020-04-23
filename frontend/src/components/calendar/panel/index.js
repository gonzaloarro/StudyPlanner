// React
import React, { useState } from "react";
// Transitions/Animations
import { CSSTransition } from "react-transition-group";
// Components
import CustomModal from "../../utils/modal";
import EventForm from "../eventForm";
import Calendar from "../calendar";
// Styled Components
import {
  ButtonGroupWrapper,
  ChangeViewButton
} from "./style";


export default function CalendarPanel(props) {

  // State
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [selectedEvent, setSelectedEvent] = useState({});
  const [calendarView, setCalendarView] = React.useState("dayGridMonth");
  const [inProp, setInProp] = React.useState(false);

  function addEvent(event) {
    props.addEvent(event);
    setModalShow(false);
  }

  function updateEvent(event) {
    if (event.isTask) {
      const task = {
        ...event,
        description: event.title,
        date_and_time: event.date
      }
      props.updateTask(task);
    }
    else {
      props.updateEvent(event);
    }
    setModalShow(false);
  }

  function deleteEvent(id) {
    props.deleteEvent(id);
    setModalShow(false);
  }

  function dateClick(info) {
    const date = new Date(info.dateStr).toISOString().split('T')[0];
    const event = {
      title: "",
      date: date,
      start_time: "08:00",
      end_time: "09:00",
      plan: props.plan.id
    };
    setSelectedEvent(event);
    setModalTitle("Agregar evento");
    setModalShow(true);
  }

  function eventClick(info) {
    const start_date = new Date(info.event.start);
    start_date.setMinutes(start_date.getMinutes()-start_date.getTimezoneOffset());
    const end_date = new Date(info.event.end);
    end_date.setMinutes(end_date.getMinutes()-end_date.getTimezoneOffset());
    const event = {
      id: parseInt(info.event.id),
      title: info.event.title,
      date: start_date.toISOString().split('T')[0],
      start_time: start_date.toISOString().split('T')[1].slice(0, 5),
      end_time: end_date.toISOString().split('T')[1].slice(0, 5),
      plan: props.plan.id,
      isTask: info.event.extendedProps.isTask
    };
    setSelectedEvent(event);
    setModalTitle("Editar");
    setModalShow(true);
  }

  function changeView(view) {
    setCalendarView(view);
    setInProp(!inProp);
  }

  return (
    <>
      <ButtonGroupWrapper>
        <ChangeViewButton onClick={() => changeView("dayGridMonth")}>Vista mensual</ChangeViewButton>
        <ChangeViewButton onClick={() => changeView("timeGridWeek")}>Vista semanal</ChangeViewButton>
      </ButtonGroupWrapper>

      <CSSTransition
        in={inProp}
        timeout={300}
        classNames="calendar"
        appear={true}
      >
        <Calendar
          view = {calendarView}
          dateClick = {dateClick}
          eventClick = {eventClick}
          events = {props.events}
          tasks = {props.tasks}
          examDate = {props.plan.date_and_time}
        />
      </CSSTransition>

      <CustomModal
        show={modalShow}
        close={() => setModalShow(false)}
        size="sm"
        title={modalTitle}
        body=<EventForm
                event={selectedEvent}
                submit={modalTitle === "Editar" ? updateEvent : addEvent}
                deleteEvent={modalTitle === "Editar" ? deleteEvent : null}
              />
      />
    </>
  );
}
