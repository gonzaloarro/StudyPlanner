import styled from "styled-components";

import { Form } from "react-bootstrap";


export const StyledInputDate = styled(Form.Control)`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::-webkit-clear-button {
    -webkit-appearance: none;
  }
`;

export const StyledInputTime = styled(Form.Control)`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::-webkit-clear-button {
    -webkit-appearance: none;
  }
`;

export const TimePicker = styled.div`
  margin-top: 1rem;
`;

export const StyledToggle = styled.div`
`;

export const FormFooter = styled.div`
  margin-top: 1rem;
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
