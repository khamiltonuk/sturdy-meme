import { connect } from "react-redux";
import { createNote } from "../actions/actions";

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
      createNote: note => dispatch(createNote(note))
    };
  }
)(Pinboard);

export default PinboardContainer;
