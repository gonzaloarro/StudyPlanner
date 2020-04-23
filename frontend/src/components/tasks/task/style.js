import styled from "styled-components";


export const StyledTask = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.itemBackground};
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: -1px;
  z-index: 1;
  transition: transform 0.35s, z-index 0.35s, border 0.35s;
  font-size: 1.2em;

  &:hover {
    transform: scale(1.05, 1.15);.
    z-index: 50;
    border: 1px solid rgba(0, 0, 0, 0.550);
    transition: transform 0.35s, z-index 0s 0s, border 0.35s;
  }

  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

export const Priority = styled.div`
  margin-left: -1.75rem;
  color: ${props => {
    switch(props.priority) {
      case("High"): return "red";
      case("Medium"): return "orange";
      default: return "green";
    }
  }}
`;

export const StyledCategory = styled.div`
  width: 15%;
  text-align: center;
  font-size: 1.6em;
  color: ${props => props.theme.colors.lighterDominantColor2};
`;

export const StyledDescription = styled.div`
  width: 45%;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledDate = styled.div`
  width: 25%;
`;

export const StyledTime = styled.div`
  width: 15%;
`;

export const StyledTaskIcon = styled.div`
  color: #007bff;
  font-size: 2rem;
`;

export const Button = styled.button`
  border: 1px solid;
  border-radius: 10px;
  padding: 0.3rem 0.6rem;
  border-color: ${props => props.completed ? "green" : "red"};
  background-color: ${props => props.completed ? "green" : "red"};
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  color: white;
  text-align: center;

  &:hover:enabled {
    border-color: ${props => props.completed ? "darkgreen" : "darkred"};
    background-color: ${props => props.completed ? "darkgreen" : "darkred"};
  }

  &:disabled {
    opacity: 0.7;
  }
`;
