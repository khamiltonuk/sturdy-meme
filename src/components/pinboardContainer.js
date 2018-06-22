import { connect } from "react-redux";
import { createNote, removeNote } from "../actions/actions";

import Pinboard from "./Pinboard";

const PinboardContainer = connect(
  function mapStateToProps(state) {
    return {
      notes: state.notes,
      loading: state.loading,
      currentLocation: state.currentLocation
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      createNote: note => dispatch(createNote(note)),
      removeNote: id => dispatch(removeNote(id))
    };
  }
)(Pinboard);

export default PinboardContainer;
