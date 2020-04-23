import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: bold;
  text-align: center;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 20em;
  border: none;
  outline: none;
  resize: none;
  overflow: auto;
`;

export const FormFooter = styled.div`
  text-align: center;

  & button {
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:only-child {
      border-radius: 0.25rem;
    }
  }
`;


export const Button = styled.button`
  padding: 0.3rem 0.6rem;
  border: 1px solid;
  border-radius: 0.25rem;
  border-color: ${props => props.theme.colors.dominantColor};
  background-color: ${props => props.theme.colors.dominantColor};
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  color: white;
  text-align: center;

  &:hover:enabled {
    border-color: ${props => props.theme.colors.darkerDominantColor1};
    background-color: ${props => props.theme.colors.darkerDominantColor1};
  }

  &:disabled {
    opacity: 0.7;
  }
`;
