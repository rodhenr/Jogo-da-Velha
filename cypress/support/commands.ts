/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    playerOneWin(): void;
    playerTwoWin(): void;
    draw(): void;
  }
}

Cypress.Commands.add("playerOneWin", () => {
  cy.get('[data-cy="quadrado0"]').click();
  cy.get('[data-cy="quadrado1"]').click();
  cy.get('[data-cy="quadrado4"]').click();
  cy.get('[data-cy="quadrado2"]').click();
  cy.get('[data-cy="quadrado8"]').click();
  cy.get('[data-cy="mensagem-vitoria"]')
    .should("have.text", "O vencedor foi o jogador 1")
    .and("be.visible");
});

Cypress.Commands.add("playerTwoWin", () => {
  cy.get('[data-cy="quadrado1"]').click();
  cy.get('[data-cy="quadrado0"]').click();
  cy.get('[data-cy="quadrado2"]').click();
  cy.get('[data-cy="quadrado4"]').click();
  cy.get('[data-cy="quadrado5"]').click();
  cy.get('[data-cy="quadrado8"]').click();
  cy.get('[data-cy="mensagem-vitoria"]')
    .should("have.text", "O vencedor foi o jogador 2")
    .and("be.visible");
});

Cypress.Commands.add("draw", () => {
  cy.get('[data-cy="quadrado1"]').click();
  cy.get('[data-cy="quadrado0"]').click();
  cy.get('[data-cy="quadrado2"]').click();
  cy.get('[data-cy="quadrado5"]').click();
  cy.get('[data-cy="quadrado4"]').click();
  cy.get('[data-cy="quadrado6"]').click();
  cy.get('[data-cy="quadrado3"]').click();
  cy.get('[data-cy="quadrado7"]').click();
  cy.get('[data-cy="quadrado8"]').click();
  cy.get('[data-cy="mensagem-vitoria"]')
    .should("have.text", "O JOGO TERMINOU EMPATADO!")
    .and("be.visible");
});
