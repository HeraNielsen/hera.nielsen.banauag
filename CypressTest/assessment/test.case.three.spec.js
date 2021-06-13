describe('Test Case 3', function() {

    // From the home page go to shop page
    before(() => {
        cy.shop_page()
    })

    it('Click buy button 2 times on Funny Cow', () => {
        cy.contains('Funny Cow').should('exist')
        for(let n=0; n!=2; n++){
            cy.contains('Funny Cow').parent().find('.btn').click()
        }
    })

    it('Click buy button 1 time on Fluffy Bunny', () => {
        cy.contains('Fluffy Bunny').should('exist')
        cy.contains('Fluffy Bunny').parent().find('.btn').click()
    })

    it('Click the cart menu', () => {
       cy.get('li[id=nav-cart]').click()
    })

    it('Verify the items are in the cart', () => {
       cy.get('table').contains('td', 'Funny Cow').should('be.visible');
       cy.get('table').contains('td', 'Fluffy Bunny').should('be.visible');
    })
})