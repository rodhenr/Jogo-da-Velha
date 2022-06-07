/// <reference types="cypress" />

describe("playing", () => {
  it("players should win or draw", () => {
    cy.visit("/");
    cy.playerOneWin();
    cy.get('[data-cy="jogar-novamente"]').click();
    cy.playerTwoWin();
    cy.get('[data-cy="jogar-novamente"]').click();
    cy.draw();
  });
});
