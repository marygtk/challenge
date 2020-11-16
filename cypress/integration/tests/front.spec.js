describe('Front TEST', () => {

    beforeEach(function() {
        cy.fixture('fb.json').as('testValues')
    })

    it('Post a comment on my test App', () => {
        cy.get('@testValues').then((testValues) => {
        cy.visit(testValues.firstUrl)
        cy.login(testValues.email, testValues.password)
        });
    })
    
    it('Edit a post', () => {
        cy.edit("mandioca", {force: true});
        cy.xpath("//div[contains(text(),'mandioca')]").should('have.value', "mandioca");
    });

    // it('Delete posts', () => {
    //     cy.delete({force: true});
    // })

})
