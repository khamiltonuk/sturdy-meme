import * as types from "../constants/actionTypes";

//folder actions
export function createFolder(payload) {
  return {
    type: types.CREATE_FOLDER,
    payload
  };
}
export function updateFolderName(payload) {
  return {
    type: types.UPDATE_FOLDER_NAME,
    payload
  };
}
export function updateFolderColour(payload) {
  return {
    type: types.UPDATE_FOLDER_COLOUR,
    payload
  };
}

export function closeCurrentFolder(payload) {
  return {
    type: types.CLOSE_CURRENT_FOLDER,
    payload
  };
}

//fetch_notes
export function serverFetchNotes() {
  return {
    type: types.SERVER_FETCH_NOTES
  };
}
export function serverFetchNotesSuccess(payload) {
  return {
    type: types.SERVER_FETCH_NOTES_SUCCESS,
    payload
  };
}

export function serverFetchNotesFailure(payload) {
  return {
    type: types.SERVER_FETCH_NOTES_FAILURE,
    payload
  };
}

export function loaclFetchNotes(payload) {
  return {
    type: types.LOCAL_FETCH_NOTES,
    payload
  };
}

// edit notes
export function createNote(payload) {
  return {
    type: types.CREATE_NOTE,
    payload
  };
}

export function removeNote(payload) {
  return {
    type: types.REMOVE_NOTE,
    payload
  };
}

export function updateNoteColour(payload) {
  return {
    type: types.UPDATE_NOTE_COLOUR,
    payload
  };
}
export function updateNoteSize(payload) {
  return {
    type: types.UPDATE_NOTE_SIZE,
    payload
  };
}
export function updateNoteText(payload) {
  return {
    type: types.UPDATE_NOTE_TEXT,
    payload
  };
}
export function updateNoteLocation(payload) {
  return {
    type: types.UPDATE_NOTE_LOCATION,
    payload
  };
}
export function updateNotePosition(payload) {
  return {
    type: types.UPDATE_NOTE_POSITION,
    payload
  };
}
