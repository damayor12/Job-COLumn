/* eslint-disable no-undef */
describe('Cypress', () => {
  it('is working', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(true).to.equal(true);
  });

  it('visits the app', () => {
    cy.visit('http://localhost:3000');
  });

  it('should type into the input', () => {
    cy.get('.numeric-test').type(30000)
  });


  it('backspace', () => {
    cy.get('.numeric-test').type('{selectall}{backspace}');
  });




  
});
