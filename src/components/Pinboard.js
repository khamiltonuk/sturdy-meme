import React from "react";
import uuidv1 from "uuid/v1";
import Postit from "./PostitContainer";
import styled from "styled-components";

const Postits = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Pinboard = props => {
  const newNote = function(noteId) {
    return {
      noteText: "",
      noteColour: "yellow",
      id: noteId,
      x: 100,
      y: 100
    };
  };

  return (
    <div>
      <h1>Pinboard</h1>
      <button onClick={() => props.createNote(newNote(uuidv1()))}>
        Create new note
      </button>
      <Postits>
        {props.notes &&
          props.notes.map(note => {
            return <Postit key={note.id} note={note} />;
          })}
      </Postits>
    </div>
  );
};

export default Pinboard;
