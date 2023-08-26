import React from "react";
import SearchInput from "./index";

describe("<SearchInput />", () => {
  beforeEach(() => {
    cy.mount(<SearchInput setSearchText={() => {}} searchText="" />);
  });
  it("should be input and have a 'Write a search word' placeholder ", () => {
    cy.get('input[placeholder="Write a search word"]')
  });
  it("input must be writable", () => {
    cy.get("input").type("Search some text")
  })
});
