import React from "react";

// FullCalendar
import FullCalendar from "@fullcalendar/react";
// FullCalendar Plugins
import dayGridPlugin from "@fullcalendar/daygrid";
// FullCalendar Styles
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
// FullCalendar Language Support
import esLocale from "@fullcalendar/core/locales/es";

import {
  ExamInfoWrapper,
  CalendarWrapper,
  InfoWrapper
} from "./style";

import { withTheme } from "styled-components";

export default withTheme(ExamInfo);

function ExamInfo(props) {

  const examDate = new Date(props.plan.date_and_time);
  examDate.setMinutes(examDate.getMinutes());
  let examEvent = {
    title: "Examen",
    date: examDate
  }
  let events = [examEvent];

  events.backgroundColor = props.theme.colors.lighterDominantColor2;
  events.borderColor = props.theme.colors.lighterDominantColor2;
  events.textColor = props.theme.colors.background;

  var daysLeft = 0;
  var hoursLeft = 0;
  if (examEvent !== undefined) {
    const examDate = new Date(examEvent.date);
    const today = new Date(new Date().setHours(0,0,0,0));
    const now = new Date();
    hoursLeft = Math.floor(((examDate - now)/(1000*60*60*24) % 1)*24);
    daysLeft = Math.floor((examDate - today)/(1000*60*60*24));
  }

  const TiempoRestante = () => {
    if (daysLeft > 0) {
      if (daysLeft === 1) {
        return <span>Faltan {daysLeft} día para el examen.</span>
      }
      else {
        return <span>Faltan {daysLeft} días para el examen.</span>
      }
    }
    else if (hoursLeft > 0) {
      return <span>Faltan {hoursLeft} horas para el examen.</span>
    }
    else {
      return "";
    }
  }

  function dayRender(dayRenderInfo) {
    if (examEvent !== undefined) {
      const today = new Date();
      today.setHours(0,0,0,0);
      const examDate = new Date(examEvent.date);
      examDate.setHours(0,0,0,0);
      dayRenderInfo.el.style.backgroundColor = props.theme.colors.background;
      if (dayRenderInfo.date.getTime() >= today.getTime() && dayRenderInfo.date.getTime() < examDate.getTime()) {
        dayRenderInfo.el.style.backgroundColor = props.theme.colors.lighterDominantColor2;
      }
    }
  }

  return (
    <ExamInfoWrapper>
      <CalendarWrapper>
        <FullCalendar
          allDaySlot={false}
          locale={esLocale}
          minTime="08:00:00"
          nowIndicator={true}
          plugins={[ dayGridPlugin ]}
          slotLabelFormat= {{
            hour: '2-digit',
            minute: '2-digit',
          }}
          defaultView="dayGridMonth"
          dayRender={dayRender}
          events={events}
          height="parent"
        />
      </CalendarWrapper>
      <InfoWrapper>
        <TiempoRestante/>
      </InfoWrapper>
    </ExamInfoWrapper>
  )
}
