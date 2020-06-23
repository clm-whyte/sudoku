/// <reference types="Cypress" />
describe("Sudoku E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });
  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y();
  });

  it("verifies that the empty grid is rendered correctly", () => {
    // count number of grids
    cy.get('[data-test="grid"]').should("have.length", 1);
    //count number of rows
    cy.get('[data-test="grid"]').children().should("have.length", 9);
    // count number of cells
    cy.get('[data-test="grid"]')
      .children()
      .children()
      .should("have.length", 81);
  });

  it("clicks the first cell", () => {
    cy.get('[data-test="cell-0/0"]').click();
    cy.get('[data-test="cell-0/0"]').should("have.text", 0);
    cy.get('[data-test="cell-0/0"]').should("have.class", "selected");
    cy.checkA11y();
  });
});
