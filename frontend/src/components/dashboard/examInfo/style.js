import styled from "styled-components";


export const ExamInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CalendarWrapper = styled.div`
  width: 50%;

  @media(max-width: 767px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;

export const InfoWrapper = styled.div`
  width: 50%;
  text-align: center;
  font-size: 2rem;

  @media(max-width: 767px) {
    width: 80%;
    font-size: 1.5rem;
  }
`;
