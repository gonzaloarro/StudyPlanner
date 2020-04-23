// React
import React, { useState, useMemo, useEffect } from "react";
// Animations
import { TransitionGroup, CSSTransition } from "react-transition-group";
// Components
import CustomModal from "../../utils/modal";
import Note from "../note";
import NoteForm from "../noteForm";
// Styled Components
import {
  MasonryWrapper,
  MasonryColumn
} from "./style";


export default function NoteList(props) {

  // Responsive behavior
  function getColumnNumber() {
    const deviceWidth = window.innerWidth;
    if (deviceWidth < 768) {
      return 1;
    }
    else if (deviceWidth < 992) {
      return 2;
    }
    else {
      return 3;
    }
  }

  // State
  const [columns, setColumns] = useState(getColumnNumber());
  const [modalShow, setModalShow] = useState(false);
  const [selectedNote, setSelectedNote] = useState({
    title: "",
    text: ""
  });

  // Secondary effects
  function debounce(func, ms) {
    let timer;
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func.apply(this, arguments)
      }, ms)
    };
  }

  useEffect(() => {
    const debouncedUpdateSize = debounce(function updateSize() {
      setColumns(getColumnNumber());
    }, 50);
    window.addEventListener('resize', debouncedUpdateSize);
    return () => {window.removeEventListener('resize', debouncedUpdateSize)};
  });

  function showModal(note) {
    setSelectedNote(note);
    setModalShow(true);
  }

  function updateNote(note) {
    setModalShow(false);
    props.updateNote(note);
  }

  function deleteNote(note) {
    setModalShow(false);
    props.deleteNote(note.id);
  }

  return (
    <>
      <CustomModal
        show={modalShow}
        close={() => setModalShow(false)}
        size="sm"
        body=<NoteForm note={selectedNote} submit={updateNote} deleteNote={deleteNote}/>
      />
      <Masonry
        columns={columns}
        notes={props.notes}
        showModal={showModal}
      />
    </>
  );
}

function Masonry(props) {

  const notesInColumns = useMemo(() => {
    const notesInColumns = [];
    for (var i = 0; i < props.columns; i++) {
      notesInColumns.push([]);
    }
    props.notes.forEach((note, i) => {
      notesInColumns[i % props.columns].push(note);
    });
    return notesInColumns;
  }, [props.columns, props.notes])

  return (
    <MasonryWrapper>
    {
      notesInColumns.map((notes, columnIndex) => (
        <MasonryColumn key={columnIndex} columns={props.columns}>
          <TransitionGroup component={null}>
          {
            notes.map((note) => (
              <CSSTransition
                key={note.id}
                timeout={{
                  enter: 500,
                  exit: 0
                }}
                classNames="item"
              >
                <Note
                  key={note.id}
                  note={note}
                  onClick={props.showModal}
                />
              </CSSTransition>
            ))
          }
          </TransitionGroup>
        </MasonryColumn>
      ))
    }
    </MasonryWrapper>
  );
}
