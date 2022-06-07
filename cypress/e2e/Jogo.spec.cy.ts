/// <reference types="cypress" />

describe("playing", () => {
  it("players should win or draw", () => {
    cy.visit("/");
    cy.get('[data-cy="quadrados"] span').should("have.text", "");
    cy.playerOneWin();
    cy.get('[data-cy="jogar-novamente"]').click();
    cy.get('[data-cy="quadrados"] span').should("have.text", "");
    cy.playerTwoWin();
    cy.get('[data-cy="jogar-novamente"]').click();
    cy.draw();
  });
});
