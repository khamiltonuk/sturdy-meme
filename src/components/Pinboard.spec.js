import React from "react";
import Pinboard from "./Pinboard";
import { shallow } from "enzyme";

describe("Pinboard", () => {
  it("should render an h1", () => {
    const component = shallow(<Pinboard />);
    expect(component.find("h1").length).toEqual(1);
  });
});
