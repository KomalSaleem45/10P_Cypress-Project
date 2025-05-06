class CartPage {
    goToCart() {
      cy.get('.shopping_cart_link').click();
    }
  
    getCartTitle() {
      return cy.get('.title'); // Usually says "Your Cart"
    }
  
    clickCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  }
  
  export default new CartPage();