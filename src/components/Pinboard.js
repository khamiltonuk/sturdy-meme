import React from "react";
import uuidv1 from "uuid/v1";
import Postit from "./PostitContainer";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const Postits = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Pinboard = props => {
  const newNote = function(noteId) {
    return {
      noteText: "Another new note",
      noteColour: "yellow",
      id: noteId,
      x: 100,
      y: 100
    };
  };

  return (
    <div>
      <h1>Pinboard</h1>

      <Button
        onClick={() => props.createNote(newNote(uuidv1()))}
        variant="fab"
        color="primary"
        aria-label="Create new note"
        title="Create new note"
      >
        <AddIcon />
      </Button>
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
