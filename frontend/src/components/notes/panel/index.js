// React
import React from "react";
// Bootstrap
import { Row, Col } from "react-bootstrap";
// Components
import CustomModal from "../../utils/modal";
import NoteForm from "../noteForm";
import NoteList from "../noteList";
// Styled Components
import {
  NewNoteButton
} from "./style";


export default function NotesPanel(props) {

  const [modalShow, setModalShow] = React.useState(false);

  function addNote(note) {
    props.addNote(note);
    setModalShow(false);
  }

  return (
    <>
      <CustomModal
        show={modalShow}
        close={() => setModalShow(false)}
        size="sm"
        body=<NoteForm note={{title: "", text: "", plan: props.plan.id}} submit={addNote}/>
      />
      <Row className="justify-content-center pt-5 pb-4">
          <NewNoteButton onClick={() => setModalShow(true)}>
            Nueva nota
          </NewNoteButton>
      </Row>
      <Row>
        <Col xs={{span: 8, offset: 2}} md={{span: 10, offset: 1}}>
          <NoteList
            notes={props.notes}
            deleteNote={props.deleteNote}
            updateNote={props.updateNote}
          />
        </Col>
      </Row>
    </>
  )
};
