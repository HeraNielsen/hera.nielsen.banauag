describe('Test Case 2', function() {

    before(() => {
        cy.visit('https://www.google.com/');
    })
    
    it('Search field', () => {
        cy.get('input[gLFyf gsfi]').click().clear.type('hera');
    })
})