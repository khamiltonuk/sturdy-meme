import reducer from "./reducer";
import {
  createNote,
  removeNote,
  updateNoteColour,
  updateNoteText,
  updateNoteSize
} from "../actions/actions";

describe("Reducer", () => {
  it("should add a note to state when createNote is dispatched", () => {
    const initialState = { notes: [] };
    const action = createNote({ noteText: "hello" });
    const expectedState = { notes: [{ noteText: "hello" }] };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should remove note from state when RemoveNote is dispatched", () => {
    const initialState = {
      notes: [{ noteText: "hello", id: 2 }, { noteText: "hello", id: 3 }]
    };
    const action = removeNote(2);
    const expectedState = { notes: [{ noteText: "hello", id: 3 }] };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should update a notes colour", () => {
    const initialState = {
      notes: [{ noteColour: "yellow", id: 2 }, { noteColour: "yellow", id: 3 }]
    };
    const action = updateNoteColour({ id: 2, noteColour: "pink" });
    const expectedState = {
      notes: [{ noteColour: "pink", id: 2 }, { noteColour: "yellow", id: 3 }]
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("update Note text", () => {
    const initialState = {
      notes: [{ noteText: "hello", id: 2 }, { noteText: "hello", id: 3 }]
    };
    const action = updateNoteText({ id: 3, noteText: "Bonjour" });
    const expectedState = {
      notes: [{ noteText: "hello", id: 2 }, { noteText: "Bonjour", id: 3 }]
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
  it("update note size", () => {
    const initialState = {
      notes: [{ x: 15, y: 100, id: 2 }, { x: 15, y: 100, id: 3 }]
    };
    const action = updateNoteSize({ id: 3, x: 105, y: 10 });
    const expectedState = {
      notes: [{ x: 15, y: 100, id: 2 }, { x: 105, y: 10, id: 3 }]
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
