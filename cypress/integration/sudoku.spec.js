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

  it("clicks multiple cells one after the other, clicked cells should be numbered, but only the last cell should be selected", () => {
    cy.get('[data-test="cell-0/0"]').click();
    cy.get('[data-test="cell-1/1"]').click();
    cy.get('[data-test="cell-2/2"]').click();
    cy.get('[data-test="cell-3/3"]').click();
    cy.get('[data-test="cell-4/4"]').click();
    cy.get('[data-test="cell-5/5"]').click();
    cy.get('[data-test="cell-6/6"]').click();
    cy.get('[data-test="cell-7/7"]').click();
    cy.get('[data-test="cell-8/8"]').click();
    cy.get('[data-test="cell-0/0"]').should("have.text", "0");
    cy.get(".sudokuCell").should("have.text", "01020304050607080");
    cy.get(".selected").should("have.length", 1);
    cy.checkA11y();
  });
});
