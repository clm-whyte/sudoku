/// <reference types="Cypress" />
describe("initial loading of the game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });

  it("verifies that the empty grid is rendered correctly", () => {
    cy.checkA11y();
    cy.get('[data-test="grid"]').should("have.length", 1);
    cy.get('[data-test^="row-"]').should("have.length", 9);
    cy.get('[data-test^="cell-"]').should("have.length", 81);
  });
});

describe("cell selection", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.injectAxe();
  });

  it("clicks multiple cells one after the other", () => {
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
    cy.get('[data-test="cell-8/8"]')
      .should("have.class", "cursor")
      .should("have.class", "selected");
    cy.checkA11y();
  });

  it("clicks one cell, and then ctrl+clicks two more cells", () => {
    cy.get('[data-test="cell-0/0"]').click().type("{ctrl}", { release: false });
    cy.get('[data-test="cell-0/8"]').type("{ctrl}", { release: false }).click();
    cy.get('[data-test="cell-8/0"]').type("{ctrl}", { release: false }).click();
    cy.get(".selected").should("have.length", 3);
    cy.checkA11y();
  });

  it("clicks centre cell then shift+clicks each outer cell in a cardinal direction", () => {
    cy.get('[data-test="cell-0/0"]').should("have.class", "cursor");

    cy.get('[data-test="cell-4/4"]')
      .click()
      .type("{shift}", { release: false });
    cy.get('[data-test="cell-4/4"]').should("have.class", "cursor");

    cy.get('[data-test="cell-0/4"]')
      .type("{shift}", { release: false })
      .click();
    cy.get('[data-test="cell-4/4"]').should("have.class", "cursor");
    cy.get(".selected").should("have.length", 5);
    cy.get('[data-test="cell-0/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-1/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-2/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-3/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/4"]').should("have.class", "selected");

    cy.get('[data-test="cell-4/8"]')
      .type("{shift}", { release: false })
      .click();
    cy.get('[data-test="cell-4/4"]').should("have.class", "cursor");
    cy.get(".selected").should("have.length", 5);
    cy.get('[data-test="cell-4/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/5"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/6"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/7"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/8"]').should("have.class", "selected");

    cy.get('[data-test="cell-8/4"]')
      .type("{shift}", { release: false })
      .click();
    cy.get('[data-test="cell-4/4"]').should("have.class", "cursor");
    cy.get(".selected").should("have.length", 5);
    cy.get('[data-test="cell-4/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-5/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-6/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-7/4"]').should("have.class", "selected");
    cy.get('[data-test="cell-8/4"]').should("have.class", "selected");

    cy.get('[data-test="cell-4/0"]')
      .type("{shift}", { release: false })
      .click();
    cy.get('[data-test="cell-4/4"]').should("have.class", "cursor");
    cy.get(".selected").should("have.length", 5);
    cy.get('[data-test="cell-4/0"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/1"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/2"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/3"]').should("have.class", "selected");
    cy.get('[data-test="cell-4/4"]').should("have.class", "selected");

    cy.checkA11y();
  });

  it("area selects cells, using shift+click in different boxes", () => {
    cy.get('[data-test="cell-5/0"]')
      .click()
      .type("{shift}", { release: false });
    cy.get('[data-test="cell-3/2"]').click().type("{shift}", { release: true });
    cy.get(".selected").should("have.length", 9);
    cy.get('[data-test="cell-5/0"]').should("have.class", "cursor");

    cy.get('[data-test="cell-3/3"]')
      .click()
      .type("{shift}", { release: false });
    cy.get('[data-test="cell-5/5"]').click().type("{shift}", { release: true });
    cy.get(".selected").should("have.length", 9);
    cy.get('[data-test="cell-3/3"]').should("have.class", "cursor");

    cy.get('[data-test="cell-3/8"]')
      .click()
      .type("{shift}", { release: false });
    cy.get('[data-test="cell-5/6"]').click().type("{shift}", { release: true });
    cy.get(".selected").should("have.length", 9);
    cy.get('[data-test="cell-3/8"]').should("have.class", "cursor");

    cy.checkA11y();
  });
});
