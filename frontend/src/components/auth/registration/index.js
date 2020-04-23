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


export default function Registration(props) {

  // State
  const [formState, setFormState] = useReducer(
    reducer, {
      user: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      isValid: false,
      errors: {
        username: "",
        password: "",
        confirmPassword: ""
      }
    }
  );

  // Reducer
  function reducer(state, action) {
    switch(action.type) {
      case 'validate':
        return validate(state);
      case 'update':
        return {...state, user: {...state.user, [action.field]: action.value}};
      default:
        return state;
    }
  }

  // Form Validation
  function validate(formState) {
    const errors = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    var isValid = true;

    if (formState.user.username === "") {
      errors.username = "Este campo no debe estar vacío.";
      isValid = false;
    }

    if (formState.user.password.length < 6) {
      if (formState.user.password.length === 0) {
        errors.password = "Este campo no debe estar vacío.";
      }
      else {
        errors.password = "La contraseña es muy corta.";
      }
      isValid = false;
    }

    if (formState.user.password !== formState.user.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden.";
      isValid = false;
    }

    return {...formState, isValid: isValid, errors: errors};
  }

  const handleInputChange = (event) => {
    if (props.auth.errors.username)
      props.clearErrors(); // Clear server validation errors
    const {name, value} = event.target;
    setFormState({type: 'update', field: [name], value: value});
    setFormState({type: "validate"});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.register(formState.user.username, formState.user.password);
  };


  return (
    <Wrapper>
      <Slide right>
        <FormContent>
          <FormTitle>Registrarse</FormTitle>
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group>
              <Form.Control
                name="username"
                type="text"
                placeholder="Usuario"
                value={formState.user.username}
                isInvalid={props.auth.errors.username || formState.errors.username}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                {props.auth.errors.username} {formState.errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="password"
                type="password"
                placeholder="Contraseña"
                value={formState.user.password}
                isInvalid={formState.errors.password !== ""}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                {formState.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Repetir contraseña"
                value={formState.user.confirmPassword}
                isInvalid={formState.errors.confirmPassword !== ""}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                {formState.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              disabled={!formState.isValid}
              className="mt-2"
            >
              Crear cuenta
            </Button>
          </Form>
        </FormContent>
        <FormFooter><a href="/">Ya tengo una cuenta.</a></FormFooter>
      </Slide>
    </Wrapper>
  );
}
