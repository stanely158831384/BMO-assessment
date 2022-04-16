describe('first test event', () => {
    it('visit Kitchen Sink page', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})

describe('react page', () => {
    it('visit local react page', () => {
        cy.visit('http://localhost:3000/');
    })
    it('search the greate gatsby',()=>{
        cy.get("#searchBar").click().type('the great gatsby');
        cy.get("#searchButton").click();
    })
    it('test the sort feature',()=>{
        cy.get("#searchButton").click();
        cy.contains('Sort by alphabetically').click();
        cy.contains('Sort by publish_date').click();
        cy.contains('Sort by alphabetically').click();
    })
})