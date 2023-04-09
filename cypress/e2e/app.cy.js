describe('App', () => {
  beforeEach(() => {
    // Change the url for test the app
    cy.visit('http://localhost:3000/');
  });

  it('displays user data', () => {
    cy.get('h1').should('contain', 'Leanne Graham');
    cy.get('p').should('contain', 'Sincere@april.biz');
  });

  it('displays loading message', () => {
    cy.contains('Loading').should('be.visible');
  });
});
