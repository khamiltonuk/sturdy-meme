import React from "react";
import styled from "styled-components";
import { compose, withState, withHandlers } from "recompose";

const RemoveNote = styled.button`
    border:0,
    padding: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Postit = styled.li`
  color: #333;
  position: relative;
  width: 300px;
  margin: 0 auto;
  transform: rotate(2deg);
  padding: 40px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
`;
const ToggleListButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const ColourPicker = styled.ul`
  list-style: none;
  padding: 0;
  margin: li;
`;
const ColourOffering = styled.li`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background: blue;
`;

const Posit = ({ note, setPostitColour, removeNote, setCount, count }) => {
  return (
    <Postit style={{ background: note.noteColour }}>
      {note.noteText}
      <RemoveNote onClick={() => removeNote(note.id)}>Remove note</RemoveNote>
      <ToggleListButton onClick={() => setCount(!count)}>
        change color
      </ToggleListButton>
      {count && (
        <ColourPicker>
          <ColourOffering onClick={() => setPostitColour("yellow")}>
            yellow
          </ColourOffering>
          <ColourOffering onClick={() => setPostitColour("green")}>
            green
          </ColourOffering>
          <ColourOffering onClick={() => setPostitColour("pink")}>
            pink
          </ColourOffering>
        </ColourPicker>
      )}
    </Postit>
  );
};
const enhance = compose(
  withState("count", "setCount", false),
  withHandlers({
    setPostitColour: props => colour => {
      props.updateNoteColour({ id: props.note.id, noteColour: colour });
      props.setCount();
    }
  })
);

export default enhance(Posit);
