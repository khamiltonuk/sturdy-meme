import React from "react";
import styled from "styled-components";
import { compose, withState, withHandlers } from "recompose";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";

import ColourPicker from "./ColourPicker";

const StyledButton = styled(Button)`
  position: absolute !important;
  top: 10px;
  right: 10px;
`;

const Postit = styled.li`
  color: #333;
  position: relative;
  width: 300px;
  min-height: 300px;
  margin: 0 auto;
  transform: rotate(2deg);
  padding: 40px 0 0 40px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
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
      <ColourPicker
        setPostitColour={setPostitColour}
        toggleColourPicker={toggleColourPicker}
      />
    </Postit>
  );
};
const enhance = compose(
  withState("isPostitActive", "highLightPostit", false),
  withHandlers({
    handleInputChange: props => event => {
      props.updateNoteText({ id: props.note.id, noteText: event.target.value });
    },
    highLightPostIt: props => event => {}
  })
);

export default enhance(Posit);
