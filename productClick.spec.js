import LoginPage from '../pages/LoginPage';

describe('Click product and verify product page', () => {
  const loginPage = new LoginPage();

  it('Should land on product detail page', () => {
    cy.visit('https://www.saucedemo.com');
    loginPage.login('standard_user', 'secret_sauce');
    
    // Click the first product
    cy.get('.inventory_item').first().find('.inventory_item_name').click();

    // Verify product page
    cy.get('.inventory_details_name').should('be.visible');
  });
});