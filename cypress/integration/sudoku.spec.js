/// <reference types="Cypress" />

describe("Sudoku E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("verifies that the empty grid is rendered correctly", () => {
    cy.get('[data-test="grid"]').should("have.length", 1);
    cy.get(".cell").should("have.length", 81);
  });

  it("clicks the first cell", () => {
    cy.get('[data-test="cell-0/0"]').click();
    cy.get('[data-test="cell-0/0"]').should("have.text", 0);
  });
});
