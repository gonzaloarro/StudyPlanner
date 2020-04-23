// React
import React from "react";
// Bootstrap
import { Spinner } from "react-bootstrap";
// Styled Components
import {
  Wrapper,
  Text
} from "./style";

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Spinner animation="border" size="lg" />
      <Text>Cargando...</Text>
    </Wrapper>
  );
}
