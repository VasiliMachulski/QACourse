describe('My First Test', () => {
  it('Does not do much!', () => {
      
      cy.visit('http://shop.bugred.ru/shop/item/2571')
      cy.get('#exampleCount').type('-1');
      cy.get('.col-md-4 > form > .btn').click();
      cy.get('.float-right > .nav-link').click();
      cy.get(':nth-child(5) > a > .fas').click();
      cy.visit('http://shop.bugred.ru/shop/item/2571')
      cy.get('#exampleCount').type('0');
      cy.get('.col-md-4 > form > .btn').click();
      cy.get('.float-right > .nav-link').click();
      cy.get(':nth-child(5) > a > .fas').click();
      cy.visit('http://shop.bugred.ru/shop/item/2571')
      cy.get('.col-md-4 > form > .btn').click();
      cy.get('#exampleCount').type('1');
      cy.get('.col-md-4 > form > .btn').click();
      cy.get('.float-right > .nav-link').click();
      cy.get(':nth-child(5) > a > .fas').click();
    })
})