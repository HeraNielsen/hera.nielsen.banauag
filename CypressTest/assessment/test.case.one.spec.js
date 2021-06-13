describe('Test Case 1', function() {

    // From the home page go to contact page
    before(() => {
        cy.contact_page()
        cy.contains('Forename')
    })
    
    it('Click submit button', () => {
       cy.contains('Submit').should('exist').click()
    })

    it('Validate errors', () => {
        cy.contains('Forename is required').should('exist')
        cy.contains('Email is required').should('exist')
        cy.contains('Message is required').should('exist')
    })

    it('Populate mandatory fields', () => {
        cy.get('input[id=forename]').type('hera')
        cy.get('input[id=email]').type('hera.nielsen@example.com')
        cy.get('#message').type('message')
    })

    it('Validate errors are gone', () => {
        cy.contains('Forename is required').should('not.exist')
        cy.contains('Email is required').should('not.exist')
        cy.contains('Message is required').should('not.exist')
    })
})