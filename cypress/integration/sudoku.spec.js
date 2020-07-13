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
    cy.get('[data-test="grid"]').should("have.length", 1);
    cy.get('[data-test^="row-"]').should("have.length", 9);
    cy.get('[data-test^="cell-"]').should("have.length", 81);
  });

  it("clicks the first cell", () => {
    cy.get('[data-test="cell-0/0"]').click();
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
    cy.get(".selected").should("have.length", 1);
    cy.checkA11y();
  });

  it("clicks one cell, and then CTRL + Clicks two more cells", () => {
    cy.get('[data-test="cell-0/0"]').click().type("{ctrl}", { release: false });
    cy.get('[data-test="cell-0/8"]').type("{ctrl}", { release: false }).click();
    cy.get('[data-test="cell-8/0"]').type("{ctrl}", { release: false }).click();
    cy.get(".selected").should("have.length", 3);
  });

  it("clicks one cell, and then SHIFT + Clicks a cell in the middle of the same row and then at the end of the same row", () => {
    cy.get('[data-test="cell-0/0"]')
      .click()
      .type("{shift}", { release: false });
    cy.get('[data-test="cell-0/4"]')
      .type("{shift}", { release: false })
      .click();
    cy.get(".selected").should("have.length", 5);
    cy.get('[data-test="cell-0/8"]')
      .type("{shift}", { release: false })
      .click();
    cy.get(".selected").should("have.length", 9);
  });

  // it("clicks one cell, and then SHIFT + Clicks a cell in the middle of the same column and then at the end of the same column", () => {
  //   cy.get('[data-test="cell-0/0"]')
  //     .click()
  //     .type("{shift}", { release: false });
  //   cy.get('[data-test="cell-4/0"]')
  //     .type("{shift}", { release: false })
  //     .click();
  //   cy.get('[data-test="cell-8/0"]')
  //     .type("{shift}", { release: false })
  //     .click();
  //   cy.get(".sudokuCell").should("have.text", "03672");
  //   cy.get(".selected").should("have.length", 9);
  // });
});
