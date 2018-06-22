import { connect } from "react-redux";
import {
  removeNote,
  updateNoteColour,
  updateNoteText
} from "../actions/actions";

import Postit from "./Postit";

const PostitContainer = connect(
  null,
  function mapDispatchToProps(dispatch) {
    return {
      removeNote: id => dispatch(removeNote(id)),
      updateNoteColour: id => dispatch(updateNoteColour(id)),
      updateNoteText: id => dispatch(updateNoteText(id))
    };
  }
)(Postit);

export default PostitContainer;
