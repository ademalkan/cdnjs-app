describe("cdnjs home page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(1500);

  });

  it("header element handle and header link with title check", () => {
    cy.get("header").get("a").contains("CDNJS APP");
  });
  it("search input check", () => {
    cy.get(`input[placeholder="Write a search word"]`);
  });
  it("total cdn check", () => {
    cy.get(`nav h6`).contains("Total CDN : ");
  });
  it("article check and cdn library list check", () => {
    cy.get(`article a > div`).should("have.length", 12);
  });
  it("More Than button check", () => {
    cy.get(`article button`).should("exist");
  });
  it("More Than button click and library length check", () => {
    cy.get(`article button`)
      .click()
      .then(() => {
        cy.get("article a > div").should("have.length", 24);
      });
  });
  it("search input write and library length check", () => {
    cy.get(`input[placeholder="Write a search word"]`).type("axios");
    cy.wait(500);
    cy.get(`article a > div`).should("have.length", 7);
  });
  it("click to detail page", () => {
    cy.get(`article a:eq(0)`).click();
    cy.location('pathname').should('eq', '/react-dom')
    cy.go('back')

  });
});
