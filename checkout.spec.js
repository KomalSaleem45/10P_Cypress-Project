import loginPage from '../pages/LoginPage';
import productsPage from '../pages/ProductsPage';
import cartPage from '../pages/CartPage';
import checkoutPage from '../pages/CheckoutPage';

describe('Checkout Flow', () => {
  it('Completes a purchase', () => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');

    productsPage.clickProduct('Sauce Labs Backpack');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cartPage.goToCart();
    cartPage.getCartTitle().should('contain.text', 'Your Cart');
    cartPage.clickCheckout();

    checkoutPage.fillInformation('John', 'Doe', '12345');
    checkoutPage.clickContinue();
    checkoutPage.clickFinish();
    checkoutPage.getConfirmationMessage().should('contain.text', 'THANK YOU FOR YOUR ORDER');
  });
});