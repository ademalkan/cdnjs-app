import React from "react";
import ErrorContent from "./index";

describe("<ErrorContent />", () => {
  it("ErrorContent render and content test", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ErrorContent />);
    cy.get("img");
    cy.get("h6").contains("Not Found Content");
  });
});
