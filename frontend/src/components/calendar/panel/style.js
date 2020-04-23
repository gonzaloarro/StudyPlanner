import styled from "styled-components";

export const ButtonGroupWrapper = styled.div`
  margin: 3rem 0 1.5rem 0;
  text-align: center;

  & button {
    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
`;

export const ChangeViewButton = styled.button`
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
