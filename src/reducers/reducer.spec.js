import reducer from "./reducer";
import { createNote } from "../actions/actions";

describe("Reducer", () => {
  it.only("should add a note to state when createNote is dispatched", () => {
    const initialState = { notes: [] };
    const action = createNote({ noteText: "hello" });
    const expectedState = { notes: [{ noteText: "hello" }] };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
