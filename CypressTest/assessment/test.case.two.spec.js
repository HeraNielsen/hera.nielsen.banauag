describe('Test Case 2', function() {

    // From the home page go to contact page
    before(() => {
        cy.contact_page()
    })

    it('Populate mandatory fields', () => {
        cy.wait(150)
        cy.contains('Your email address will only be used in reply to this message.').should('be.visible')
        cy.get('input[id=forename]').type('hera', {force: true})
        cy.get('input[id=email]').type('hera.nielsen@example.com')
        cy.get('#message').should('exist').type('message')
    })

    it('Click submit button', () => {
        cy.contains('Submit').should('exist').click()
    })

    it('Validate successful submission message', () => {
       
        cy.contains('Sending Feedback').should('be.visible')
        cy.wait(500)
        cy.contains('Thanks', { timeout: 50000}).should('be.visible')
        cy.contains('we appreciate your feedback').should('exist')
    })
})