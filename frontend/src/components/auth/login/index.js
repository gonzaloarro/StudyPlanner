// React
import React, { useReducer } from "react";
// Bootstrap
import { Form, Button } from "react-bootstrap";
// Animations
import Slide from "react-reveal/Slide";
// Styled Components
import {
  Wrapper,
  FormTitle,
  FormContent,
  FormFooter
} from "../style";


export default function Login(props) {

  const [formState, setFormState] = useReducer(
    (state, newState) => ({...state, ...newState}), {
      username: "",
      password: ""
    }
  );

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormState({[name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(formState.username, formState.password);
  };

  return (
    <Wrapper>
      <Slide right>
        <FormContent>
          <FormTitle>Iniciar sesión</FormTitle>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                name="username"
                type="text"
                placeholder="Usuario"
                value={formState.username}
                isInvalid={props.auth.errors.non_field_errors}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="password"
                type="password"
                placeholder="Contraseña"
                value={formState.password}
                isInvalid={props.auth.errors.non_field_errors}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                {props.auth.errors.non_field_errors}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              disabled={formState.username.length === 0 || formState.password.length < 6}
              className="mt-2"
            >
              Login
            </Button>
          </Form>
        </FormContent>
        <FormFooter><a href="/register">Registrarse.</a></FormFooter>
      </Slide>
    </Wrapper>
  );
}
