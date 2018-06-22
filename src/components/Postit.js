import React from "react";

const Posit = props => {
  console.log(props);
  return (
    <li key={props.note.id}>
      {props.note.noteText}
      <button onClick={() => props.removeNote(props.note.id)}>
        Remove note
      </button>
    </li>
  );
};

export default Posit;
