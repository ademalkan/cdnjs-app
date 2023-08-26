import React from "react";
import CDNCard from "./index";
import { libraryMock } from "@/mocks/libraryMock";

describe("<CDNCard />", () => {
  beforeEach(() => {
    cy.mount(<CDNCard library={libraryMock} />);
  });

  it("a element and href control", () => {
    cy.get("a").should("have.attr", "href").and("include", "react");
  });
  it("CDNCard mock data check", () => {
    cy.get("a >  div > div").contains("react").contains("18.2.0").get("svg");
    cy.get("a > div > div:last-child").contains(
      "React is a JavaScript library for building user in..."
    );
  });
});
