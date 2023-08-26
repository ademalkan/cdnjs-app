import React from "react";
import MoreThanButton from "./index";

describe("<MoreThanButton />", () => {
  beforeEach(() => {
    cy.mount(
      <MoreThanButton
        length={1}
        moreShowDataHandler={() => {}}
        showDataEnd={0}
      />
    );
  });

  it("have a must be text More Than", () => {
    cy.get("button").should("contain", "More Than");
  });
  it("have a must be clickable button", () => {
    cy.get("button").click();
  });

  it("if showDataEnd amount bigger, buton is hidden", () => {
    cy.mount(
      <MoreThanButton
        length={1}
        moreShowDataHandler={() => {}}
        showDataEnd={2}
      />
    );
    cy.get("button").should("not.exist");
  });
});
