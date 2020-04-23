import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Container = styled.div`
  position: fixed;
  width: 5rem;
  top: 50%;
  left: 4.17%;
  z-index: 1;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-align: center;
`;

export const StyledMenuItem = styled(Link)`
  display: block;
  padding: .8rem 1rem;
  border: solid black;
  border-width: 0px 1px 1px 1px;
  background-color: ${props => props.theme.colors.dominantColor};
  color: ${props => props.theme.colors.background};
  opacity: 1;
  -webkit-transition: opacity .20s linear;
  transition: opacity .20s linear;

  &:first-child {
    border-top: 1px solid black;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }

  &:last-child {
    border-bottom-right-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  &:hover {
    opacity: 0.8;
    color: white;
    text-decoration: none;

    svg {
      transform: scale(1.3, 1.3) rotate(360deg);
    }
  }

  &.active {
    background-color: ${props => props.theme.colors.lighterDominantColor2};

    &:hover {
      opacity: 1;

      svg {
        transform: none;
      }
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  transition: transform 0.75s;
`;
