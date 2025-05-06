class ProductsPage {
    getTitle() {
      return cy.get('.title');
    }
  
    clickProduct(name) {
      cy.contains('.inventory_item_name', name).click();
    }
  
    getProductDetailTitle() {
      return cy.get('.inventory_details_name');
    }
  }
  
  export default ProductsPage;