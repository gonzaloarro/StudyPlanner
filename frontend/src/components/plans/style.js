import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding-top: 8rem;
  text-align: center;
`;

export const NewPlanButton = styled.button`
  padding: 0.3rem 0.6rem;
  border: 1px solid;
  border-radius: 0.25rem;
  border-color: ${props => props.theme.colors.dominantColor};
  background-color: ${props => props.theme.colors.dominantColor};
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  color: white;
  text-align: center;

  &:hover {
    border-color: ${props => props.theme.colors.lighterDominantColor2};
    background-color: ${props => props.theme.colors.lighterDominantColor2};
  }
`;
