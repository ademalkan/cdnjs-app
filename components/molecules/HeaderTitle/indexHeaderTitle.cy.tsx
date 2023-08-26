import React from "react";
import HeaderTitle from "./index";

describe("<HeaderTitle />", () => {
  it("HeaderTitle render and content test", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeaderTitle title="Header Title" />);
    cy.get("a").contains("Header Title").should("have.attr", "href").and("include", "/");
  });
});
