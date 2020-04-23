// React
import React, { useReducer } from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
// Styled Components
import {
  StyledInput,
  StyledTextArea,
  FormFooter,
  Button
} from "./style";


export default function NoteForm(props) {

  // State
  const [formState, setFormState] = useReducer(
    (state, newState) => ({...state, ...newState}), props.note
  );

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormState({[name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = formState;
    props.submit(note);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        name="title"
        type="text"
        placeholder="Título"
        maxLength={60}
        value={formState.title}
        onChange={handleInputChange}
      />
      <StyledTextArea
        name="text"
        placeholder="Crear nota"
        value={formState.text}
        onChange={handleInputChange}
      />
      <FormFooter>
        {
          props.deleteNote &&
          <Button type="button" onClick={() => props.deleteNote(formState)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        }
        <Button type="submit" disabled={formState.title === ""}>
          <FontAwesomeIcon icon={faSave} />
        </Button>
      </FormFooter>
    </form>
  );
}
