class CheckoutPage {
    fillInformation(firstName, lastName, zip) {
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(zip);
    }
  
    clickContinue() {
      cy.get('[data-test="continue"]').click();
    }
  
    clickFinish() {
      cy.get('[data-test="finish"]').click();
    }
  
    getConfirmationMessage() {
      return cy.get('.complete-header'); // e.g., "THANK YOU FOR YOUR ORDER"
    }
  }
  
  export default new CheckoutPage();