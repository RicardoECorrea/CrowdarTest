import { productLocators } from '../support/locators';

const products = [
  'sauce-labs-backpack',
  'sauce-labs-bike-light',
  'sauce-labs-bolt-t-shirt',
  'sauce-labs-fleece-jacket',
  'sauce-labs-onesie',
  'test.allthethings\(\)-t-shirt-\(red\)'
];

describe('Add to Cart Functionality', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('#04 - Add Single product to cart', () => {
    cy.get(productLocators.addToCartButton(products[0])).click();
    cy.get(productLocators.cartBadge).should('have.text', '1');
  });

  it('#05 - Add Multiple Products to cart', () => {
    cy.get(productLocators.addToCartButton(products[0])).click();
    cy.get(productLocators.addToCartButton(products[1])).click();
    cy.get(productLocators.addToCartButton(products[2])).click();
    cy.get(productLocators.cartBadge).should('have.text', '3');
  });
});
    