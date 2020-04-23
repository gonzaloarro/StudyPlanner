import styled from "styled-components";

export const StyledPlan = styled.div`
  width: 100%;
  margin: 1rem 1rem 1.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  transition: transform 0.3s;
  text-align: center;
  background-color: ${props => props.theme.colors.itemBackground};
  color: ${props => props.theme.colors.dominantColor};

  & button {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.1s, opacity 0.3s;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transform: scale(1.2);
    transition: border 0.3s, transform 0.3s;

    button {
      visibility: visible;
      opacity: 1;
      transition: visibility 0.1s, opacity 0.3s;
    }
  }

  @media(min-width: 576px) {
    width: 80%;
  }

  @media(min-width: 768px) {
    width: 40%;
  }

  @media(min-width: 992px) {
    width: 25%;
  }
`;

export const Header = styled.div`
  padding: 1rem;
  font-size: 3em;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.2em;
  text-shadow: 1px 1px 2px gray;
`;

export const Footer = styled.div`
  padding: 1rem;
`;

export const EditButton = styled.button`
  padding: 0.3rem 0.6rem;
  border: 1px solid;
  border-radius: 0.25rem;
  border-color: ${props => props.theme.colors.dominantColor};
  background-color: ${props => props.theme.colors.dominantColor};
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  color: white;
  text-align: center;

  &:hover {
    border-color: ${props => props.theme.colors.darkerDominantColor1};
    background-color: ${props => props.theme.colors.darkerDominantColor1};
  }
`;
