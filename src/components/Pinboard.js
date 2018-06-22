import React from "react";

const Pinboard = props => {
  return (
    <div>
      <h1>Pinboard</h1>
      <ul>
        {props.notes &&
          props.notes.map(note => {
            return <li key={note.id}>{note.noteText}</li>;
          })}
      </ul>
    </div>
  );
};

export default Pinboard;
