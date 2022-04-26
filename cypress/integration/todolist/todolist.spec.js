it('Page should contain the following strings', () => {
    cy.get('.left').should('be.empty').and('be.below').type('Hi, left')

    cy.get('.right').should('be.empty').and('be.below').type('Hi, right')

    cy.get('.base').should('be.empty').type('Hi, base')

    cy.get('.left1').should('be.empty').type('Hi, left1')

    cy.get('.right1').should('be.empty').and('be.below').type('Hi, right1')

    cy.get('.base1').should('be.empty').and('be.below').type('Hi, base1')

    cy.get('.left2').should('be.empty').and('be.below').type('Hi, left2')

    cy.get('.right2').should('be.empty').and('be.below').type('Hi, right2')

    cy.get('.base2').should('be.empty').and('be.below').type('Hi, base2')
})