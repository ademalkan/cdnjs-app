import React from "react";
import LibraryDetail from "./index";
import { libraryDetailMock } from "@/mocks/libraryDetailMock";

describe("<LibraryDetail />", () => {
  beforeEach(() => {
    cy.mount(<LibraryDetail library={libraryDetailMock} />);
  });
  it("render and library detail elements check", () => {
    cy.get("div h1").contains("react");
    cy.get("div div h2")
      .contains("Description")
      .get("p")
      .contains("React is a JavaScript library for building user interfaces.");
    cy.get("div div h2").contains("Latest Version").get("p").contains("18.2.0");
    cy.get("div div h2").contains("License").get("p").contains("MIT");
    cy.get("div div h2").contains("Author").get("p").contains("Facebook");
    cy.get("div div h2").contains("Keywords").get("p").contains("React");
    cy.get("div div a").contains("Visit Homepage");
    cy.get("div div a").contains("See Latest Version");
  });
});
