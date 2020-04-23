import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 992px) {
    min-height: 70px;
  }
`;

export const ChartTitle = styled.div`
  font-size: 1.8rem;
`;

export const LegendWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    min-height: 100px;
  }
`;

export const Label = styled.span`
  margin-right: 1rem;
  margin-bottom: 0.4rem;
  opacity: 0.5;
  font-size: 0.8em;

  &:before {
    display: inline-block;
    content: "";
    width: 1.8rem;
    height: 0.6rem;
    margin-right: 0.5rem;
    background-color: ${props => props.color};;
  }
`;
