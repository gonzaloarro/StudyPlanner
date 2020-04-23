// React
import React from "react";
// Linkify Text
import Linkify from "react-linkify";
// Styled Components
import {
  StyledNote,
  NoteTitle,
  NoteText
} from "./style";


export default function Note(props) {
  return (
    <StyledNote onClick={() => {props.onClick(props.note)}}>
      <NoteTitle>
        {props.note.title}
      </NoteTitle>
      <Linkify>
        <NoteText>
          {props.note.text}
        </NoteText>
      </Linkify>
    </StyledNote>
  );
}
