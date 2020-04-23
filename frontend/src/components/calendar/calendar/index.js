// React
import React, { useMemo } from "react";
// FullCalendar
import FullCalendar from "@fullcalendar/react";
// FullCalendar Plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// FullCalendar Styles
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
// FullCalendar Language Support
import esLocale from "@fullcalendar/core/locales/es";
// Styled Components
import { withTheme } from "styled-components";
import {
  CalendarWrapper
} from "./style";
// Constants
import * as TASK_CATEGORY from "../../../constants/tasks";


export default withTheme(Calendar);

function Calendar(props) {

  // Build the events array
  const events = useMemo(() => {
    var events = [...props.events];
    events = events.map((event) => {
      const end_date = new Date(event.date);
      end_date.setMinutes(end_date.getMinutes()+event.duration);
      return {
        id: event.id,
        title: event.title,
        start: event.date,
        end: end_date,
        isTask: false
      }
    })

    props.tasks.forEach((item, i) => {
      var end_date = new Date(item.date_and_time);
      end_date.setMinutes(end_date.getMinutes()+parseInt(item.duration));
      var color = "";
      switch(item.category) {
        case(TASK_CATEGORY.READING): color = props.theme.colors.taskCategory.reading; break;
        case(TASK_CATEGORY.PROBLEM_SOLVING): color = props.theme.colors.taskCategory.problemSolving; break;
        case(TASK_CATEGORY.SUMMARIZE): color = props.theme.colors.taskCategory.summarize; break;
        case(TASK_CATEGORY.GROUP_STUDY): color = props.theme.colors.taskCategory.groupStudy; break;
        case(TASK_CATEGORY.EXAM_SIMULATION): color = props.theme.colors.taskCategory.examSimulation; break;
        case(TASK_CATEGORY.TOPIC_REVIEW): color = props.theme.colors.taskCategory.topicReview; break;
        case(TASK_CATEGORY.CONCEPT_MAP): color = props.theme.colors.taskCategory.conceptMap; break;
        default: color = "blue";
      }
      events.push({
        id: item.id,
        title: item.description,
        start: item.date_and_time,
        end: end_date,
        backgroundColor: color,
        borderColor: color,
        isTask: true
      });
    });
    return events;
  }, [props.events, props.tasks, props.theme]);
  events.textColor = props.theme.colors.background;

  function dayRender(dayRenderInfo) {
    const examDate = new Date(props.examDate);
    if (dayRenderInfo.date.getDate() === examDate.getDate() &&
        dayRenderInfo.date.getMonth() === examDate.getMonth() &&
        dayRenderInfo.date.getFullYear() === examDate.getFullYear()
    ) {
      dayRenderInfo.el.style.backgroundColor = props.theme.colors.dominantColor;
    }
  }


  const Calendario = () => {
    return (
      <FullCalendar
        allDaySlot={false}
        locale={esLocale}
        minTime="08:00:00"
        nowIndicator={true}
        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
        slotLabelFormat= {{
          hour: '2-digit',
          minute: '2-digit',
        }}
        defaultView={props.view}
        dateClick={props.dateClick}
        eventClick={props.eventClick}
        dayRender={dayRender}
        events={events}
        height="parent"
      />
    )
  }

  return (
    <CalendarWrapper>
      <Calendario/>
    </CalendarWrapper>
  );
}
