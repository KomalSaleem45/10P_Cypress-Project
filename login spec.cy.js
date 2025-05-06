/// <reference types="cypress"/>
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

describe('Sauce Demo Tests', () => {
  it('Login and verify landing on home page', () => {
    loginPage.visit();
    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    productsPage.getTitle().should('have.text', 'Products');
  });

  it('Click on a product and verify navigation to product page', () => {
    cy.login('standard_user', 'secret_sauce'); // using custom command
    productsPage.clickProduct('Sauce Labs Backpack');
    productsPage.getProductDetailTitle().should('contain.text', 'Sauce Labs Backpack');
  });
});