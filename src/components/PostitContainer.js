import { connect } from "react-redux";
import { removeNote } from "../actions/actions";

import Postit from "./Postit";

const PostitContainer = connect(
  null,
  function mapDispatchToProps(dispatch) {
    return {
      removeNote: id => dispatch(removeNote(id))
    };
  }
)(Postit);

export default PostitContainer;
