import styled from "styled-components";

export const CalendarWrapper = styled.div`
  height: calc(100vh - 180px);
  padding: 0 30px 60px 30px;

  &.calendar-enter, &.calendar-exit {
    opacity: 0;
  }

  &.calendar-enter-active, &.calendar-exit-active {
    opacity: 1;
    transition: all 500ms;
  }

  &.calendar-enter-done, &.calendar-exit-done {
    opacity: 1;
  }
`;
