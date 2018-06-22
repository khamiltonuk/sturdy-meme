import reducer from "./reducer";
import { createNote, removeNote } from "../actions/actions";

describe("Reducer", () => {
  it("should add a note to state when createNote is dispatched", () => {
    const initialState = { notes: [] };
    const action = createNote({ noteText: "hello" });
    const expectedState = { notes: [{ noteText: "hello" }] };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it.only("should remove note from state when RemoveNote is dispatched", () => {
    const initialState = {
      notes: [{ noteText: "hello", id: 2 }, { noteText: "hello", id: 3 }]
    };
    const action = removeNote(2);
    const expectedState = { notes: [{ noteText: "hello", id: 3 }] };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
