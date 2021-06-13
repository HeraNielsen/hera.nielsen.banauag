describe('Test Case 1', function() {

    before(() => {
        cy.visit('https://www.google.com');
        cy.contains('Google offered in:').should('exist');
    })
    
    it('Search field', () => {
       cy.get('input[title=Search]').click().type('hera');
    })
})