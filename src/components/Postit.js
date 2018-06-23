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
const Input = styled.input`
  border: none;
  background: none;
  padding: 20px;
  &:focus {
    outline: 0;
  }
`;

const Posit = ({
  note,
  setPostitColour,
  removeNote,
  toggleColourPicker,
  isColorPickerShown,
  isPostitActive,
  handleInputChange,
  highLightPostit
}) => {
  return (
    <Postit
      style={{
        background: note.noteColour,
        border: isPostitActive ? "1px solid red" : "0"
      }}
    >
      <Input
        value={note.noteText}
        onChange={handleInputChange}
        onFocus={() => highLightPostit(!isPostitActive)}
        onBlur={() => highLightPostit(!isPostitActive)}
      />
      <RemoveNote onClick={() => removeNote(note.id)}>Remove note</RemoveNote>
      <ToggleListButton onClick={() => toggleColourPicker(!isColorPickerShown)}>
        change color
      </ToggleListButton>
      {isColorPickerShown && (
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
  withState("isColorPickerShown", "toggleColourPicker", false),
  withState("isPostitActive", "highLightPostit", false),
  withHandlers({
    setPostitColour: props => colour => {
      props.updateNoteColour({ id: props.note.id, noteColour: colour });
      props.toggleColourPicker();
    },
    handleInputChange: props => event => {
      props.updateNoteText({ id: props.note.id, noteText: event.value });
    },
    highLightPostIt: props => event => {}
  })
);

export default enhance(Posit);
