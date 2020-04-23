import styled from "styled-components";
import { Container } from "react-bootstrap";
import { TransitionGroup } from "react-transition-group";


export const Wrapper = styled(Container)`
  padding-top: 69px;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;

  &.panel-enter {
    opacity: 0.01;
  }

  &.panel-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  &.panel-exit {
    opacity: 1;
  }

  &.panel-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export const TransitionGroupWrapper = styled(TransitionGroup)`
  position:relative
`;
