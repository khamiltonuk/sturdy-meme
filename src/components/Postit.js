import React from "react";
import styled from "styled-components";
import { compose, withState, withHandlers } from "recompose";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import ColorLens from "@material-ui/icons/ColorLens";

const StyledButton = styled(Button)`
  position: absolute !important;
  top: 10px;
  right: 10px;
`;

const Postit = styled.li`
  color: #333;
  position: relative;
  width: 300px;
  margin: 0 auto;
  transform: rotate(2deg);
  padding: 40px 0 0 40px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
`;
const ToggleListButton = styled(Button)`
  position: absolute !important;
  bottom: 10px;
  left: 10px;
`;

const ColourPicker = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 12;
`;
const ColourOffering = styled.li`
  border-radius: 50%;
  height: 56px;
  width: 56px;
  background: blue;
  position: absolute;
  text-indent: 100%;
  overflow: hidden;
`;
const ColourOfferingYellow = ColourOffering.extend`
  background: yellow;
  left: 0;
`;
const ColourOfferingGreen = ColourOffering.extend`
  background: green;
  left: 30px;
`;
const ColourOfferingPink = ColourOffering.extend`
  background: pink;
  left: 60px;
`;
const Textarea = styled.textarea`
  border: none;
  background: none;
  padding: 20px;
  width: 100%;
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
      <Textarea
        onChange={handleInputChange}
        autoFocus
        onFocus={() => highLightPostit(!isPostitActive)}
        onBlur={() => highLightPostit(!isPostitActive)}
        defaultValue={note.noteText}
      />
      <StyledButton
        onClick={() => removeNote(note.id)}
        variant="fab"
        color="primary"
        aria-label="Remove note"
        title="Remove note"
      >
        <Delete />
      </StyledButton>
      <ToggleListButton
        onClick={() => toggleColourPicker(!isColorPickerShown)}
        title="change color"
        color="primary"
        aria-label="change color"
        variant="fab"
      >
        <ColorLens />
      </ToggleListButton>
      {isColorPickerShown && (
        <ColourPicker>
          <ColourOfferingYellow onClick={() => setPostitColour("yellow")}>
            yellow
          </ColourOfferingYellow>
          <ColourOfferingGreen onClick={() => setPostitColour("green")}>
            green
          </ColourOfferingGreen>
          <ColourOfferingPink onClick={() => setPostitColour("pink")}>
            pink
          </ColourOfferingPink>
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
