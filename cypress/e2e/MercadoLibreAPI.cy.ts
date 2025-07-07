describe('MercadoLibre Departments API', () => {
  it('Should return the correct number of departments', () => {
    cy.request('https://www.mercadolibre.com.ar/menu/departments')
      .its('status').should('eq', 200);

    cy.request('https://www.mercadolibre.com.ar/menu/departments')
      .its('body')
      .then((body) => {
        expect(body).to.have.property('departments');
        cy.log('Number of departments:', body.departments.length);
        expect(body.departments.length).to.be.greaterThan(0);
      });
  });
}); 