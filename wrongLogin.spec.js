import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

describe('Wrong Login Test', () => {
  it('Displays error for invalid credentials', () => {
    loginPage.visit();
    loginPage.enterUsername('invalid_user');
    loginPage.enterPassword('wrong_pass');
    loginPage.clickLogin();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match');
  });
});