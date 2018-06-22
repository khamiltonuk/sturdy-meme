import * as types from "../constants/actionTypes";

const initialState = {
  notes: [],
  loading: false,
  currentLocation: "home"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case types.REMOVE_NOTE:
      return {
        ...state,
        notes: [...state.notes.filter(note => note.id !== action.payload)]
      };
    default:
      return state;
  }
}
