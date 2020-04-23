import styled from "styled-components";

export const StyledNote = styled.div`
  flex: auto;
  width: 90%;
  margin: 0 auto 1.5rem auto;
  border: 1px solid black;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 6px;
  padding: 1rem 1rem;
  background-color: ${props => props.theme.colors.itemBackground};

  button {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.6s;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    transition: border 0.3s;
    cursor: pointer;

    button {
      visibility: visible;
      opacity: 1;
    }
  }

  &.item-enter {
    opacity: 0;
  }
  &.item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`;

export const NoteTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;

export const NoteText = styled.div`
  padding: 0.5rem 1rem 0.5rem 1rem;
  word-wrap: break-word;
  white-space: pre-wrap;
`;
