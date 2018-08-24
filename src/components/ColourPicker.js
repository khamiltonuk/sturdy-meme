import React from "react";
import { compose, withState } from "recompose";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ColorLens from "@material-ui/icons/ColorLens";

const ColourPickerList = styled.ul`
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
const ToggleListButton = styled(Button)`
  position: absolute !important;
  bottom: 10px;
  left: 10px;
`;
const ColourPicker = ({
  isColorPickerShown,
  toggleColourPicker,
  setPostitColour
}) => {
  return (
    <div>
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
        <ColourPickerList>
          <ColourOfferingYellow onClick={() => setPostitColour("yellow")}>
            yellow
          </ColourOfferingYellow>
          <ColourOfferingGreen onClick={() => setPostitColour("green")}>
            green
          </ColourOfferingGreen>
          <ColourOfferingPink onClick={() => setPostitColour("pink")}>
            pink
          </ColourOfferingPink>
        </ColourPickerList>
      )}
    </div>
  );
};

const enhance = compose(
  withState("isColorPickerShown", "toggleColourPicker", false)
);
export default enhance(ColourPicker);
