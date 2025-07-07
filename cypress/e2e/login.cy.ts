import { loginLocators } from '../support/locators';

describe('Login Functionality', () => {
  it('#01 - User login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_container').should('be.visible');
  });

  it('#02 - User login with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.login('invalid_user', 'invalid_password');
    cy.get('.error-message-container.error')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('#03 - Valid login with failing assertion', () => {
    cy.visit('https://www.saucedemo.com');
    cy.login('standard_user', 'secret_sauce');
    // Assertion que va a fallar a propósito para testear el reporter y el screenshot
    cy.url().should('include', '/this-will-fail');
  });
}); 