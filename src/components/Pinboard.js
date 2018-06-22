import React from "react";
import uuidv1 from "uuid/v1";

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
      <ul>
        {props.notes &&
          props.notes.map(note => {
            return (
              <li key={note.id}>
                {note.noteText}
                <button onClick={() => props.removeNote(note.id)}>
                  Remove note
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Pinboard;
