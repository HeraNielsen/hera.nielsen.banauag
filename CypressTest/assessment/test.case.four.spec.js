describe('Test Case 4', function() {

    // From the home page go to shop page
    before(() => {
        cy.shop_page()
    })

    it('Buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentines Bear', () => {
        cy.contains('Stuffed Frog').should('exist')
        cy.contains('Fluffy Bunny').should('exist')
        cy.contains('Valentine Bear').should('exist')

        for(let n=0; n!=2; n++){
            cy.contains('Stuffed Frog').parent().find('.btn').click()
        }

        for(let n=0; n!=5; n++){
            cy.contains('Fluffy Bunny').parent().find('.btn').click()
        }

        for(let n=0; n!=3; n++){
            cy.contains('Valentine Bear').parent().find('.btn').click()
        }
    })

    it('Go to cart page', () => {
        cy.get('li[id=nav-cart]').click()
    })

    // This will verify the price of the toy in the table and their subtotal
    it('Verify the price for each product and subtotal', () => {
        cy.get('td:nth-child(1)').each(($el) => {
            const text = $el.text().trim()
            switch(text) {
                case 'Stuffed Frog':
                    cy.get('td:nth-child(2)').then(price => {
                        expect(price.eq(0).text()).to.eq('$10.99')

                        // remove dollar sign then convert to int
                        const dollar = price.eq(0).text().replace(/(\$)+/ig, '')
                        const price_num = parseFloat((parseInt(dollar * 100) /100).toFixed(2))
                 
                        // Verify that each products sub total = product price * quantity
                        cy.get('input[type=number]').invoke('val').then(quantity => {
                            cy.get('td:nth-child(4)').then(subtotal => {
                                // Remove dollar sign
                                const sub = subtotal.eq(0).text().replace(/(\$)+/ig, '')

                                // subtotal = product price * quantity
                                const sub_total = price_num * quantity

                                // convert to string
                                const sub_str = sub_total.toString()
                                
                                // verify
                                expect(sub).to.eq(sub_str)
                            })

                        })
                    })
                    
                    break; 
                case 'Fluffy Bunny':
                    cy.get('td:nth-child(2)').then(price_bunny => {
                        expect(price_bunny.eq(1).text()).to.eq('$9.99')

                        // remove dollar sign then convert to int
                        const dollar = price_bunny.eq(1).text().replace(/(\$)+/ig, '')
                        const price_num = parseFloat((parseInt(dollar * 100) /100).toFixed(2))
                        
                        // Verify that each products sub total = product price * quantity
                        cy.get('.cart-item').contains("Fluffy Bunny").parent().within(() => {
                            cy.get("input[type='number']").invoke('val').then(quantity_bunny => {
                               
                                cy.get('td:nth-child(4)').then(subtotal => {
                                    // Remove dollar sign
                                    const sub = subtotal.text().replace(/(\$)+/ig, '')
                        
                                    // subtotal = product price * quantity
                                    const sub_total = price_num * quantity_bunny
    
                                    // convert to string
                                    const sub_str = sub_total.toString()
                                    
                                    // verify
                                    expect(sub).to.eq(sub_str)
                                })
    
                            })
                        })

                    })
                    break;
                case 'Valentine Bear':
                    cy.get('td:nth-child(2)').then(price_bear => {
                        expect(price_bear.eq(2).text()).to.eq('$14.99')
                        // remove dollar sign then convert to int
                        const dollar = price_bear.eq(1).text().replace(/(\$)+/ig, '')
                        const price_num = parseFloat((parseInt(dollar * 100) /100).toFixed(2))
                        
                        // Verify that each products sub total = product price * quantity
                        cy.get('.cart-item').contains("Fluffy Bunny").parent().within(() => {
                            cy.get("input[type='number']").invoke('val').then(quantity_bear => {
                                
                                cy.get('td:nth-child(4)').then(subtotal => {
                                    // Remove dollar sign
                                    const sub = subtotal.text().replace(/(\$)+/ig, '')
                        
                                    // subtotal = product price * quantity
                                    const sub_total = price_num * quantity_bear
    
                                    // convert to string
                                    const sub_str = sub_total.toString()
                                   
                                    // verify
                                    expect(sub).to.eq(sub_str)
                                })
    
                            })
                        })
                    })
                    break;
            }
        })
    })


    // Verify that total = sum(sub total)
    it('Verify that total', () => {
        cy.get('.total').then(total => {
            // Remove first- 6 letters
            const total_str = total.text().substring(6)
            let total_num = parseFloat((parseInt(total_str * 100) /100).toFixed(2))
            
            let sum = 0
            // Get the sum of all the things listed in subtotal
            cy.get('td:nth-child(4)').then(subtotal => { 

                for(let n=0; n <= subtotal.size(); n++){
                    // remove  dollar sign
                    const sub = subtotal.eq(n).text().replace(/(\$)+/ig, '')
                    sum += parseFloat((parseInt(sub * 100) /100).toFixed(2)) 
                }
                // verify the total
                expect(sum).to.eq(total_num)
            })
        })
    })
})