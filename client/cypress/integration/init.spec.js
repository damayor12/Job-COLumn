describe('Cypress', () => {
  it('testing', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(true).to.equal(true);
  });

  it('visits the home page', () => {
    cy.visit('http://localhost:3000');
  });

  // it('should have default dark mode', () => {
  //   cy.get('.welcome').should('have.class', 'dark');
  // });

  it('should empty the input', () => {
    cy.get('.numeric-test').type('{selectall}{backspace}');
  });

  it('should type into the input', () => {
    cy.get('.numeric-test').type(30000);
  });

  it('should select the darkmode button', () => {
    cy.get('[role="darkmode"]').last().click();
  });

  it('should navigate to the jobs page', () => {
    cy.get('[role="primary"]').last().click();

    cy.location('pathname').should('eq', '/jobs');
  });
});
