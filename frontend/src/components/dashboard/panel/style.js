import styled from "styled-components";
import { Row } from "react-bootstrap";

export const DashboardRow = styled(Row)`
  margin-top: 6rem;

  &:first-child {
    margin-top: 0;
    padding-top: 2rem;
    margin-bottom: -4rem;
  }

  &:last-child {
    margin-bottom: 6rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
`;




export const ChartTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
