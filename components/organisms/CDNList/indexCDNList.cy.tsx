import React from "react";
import CDNList from "./index";
import { librariesMock } from "@/mocks/librariesMock";

describe("<CDNList />", () => {
  beforeEach(() => {
    cy.mount(<CDNList CDNListData={librariesMock} />);
  });
  it("element length must be 10", () => {
    cy.get("article").children("div").should("have.length", 10);
  });
});
