import * as types from "../constants/actionTypes";

const initialState = {
  notes: [{ noteText: "A new note", id: 5, noteColour: "yellow" }],
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
    case types.UPDATE_NOTE_TEXT:
    case types.UPDATE_NOTE_COLOUR:
    case types.UPDATE_NOTE_SIZE:
      const updatedItems = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return { ...note, ...action.payload };
        }
        return note;
      });
      return {
        ...state,
        notes: updatedItems
      };
    default:
      return state;
  }
}
