import * as types from "../constants/actionTypes";

const initialState = {
  notes: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_NOTE:
      return {
        ...state,
        notes: [...notes, action.payload]
      };
    default:
      return state;
  }
}
