/// <reference types="cypress" />

import { loginLocators } from './locators';

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): void;
    }
  }
}

// @ts-ignore
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get(loginLocators.username).type(username);
  cy.get(loginLocators.password).type(password);
  cy.get(loginLocators.loginButton).click();
});
