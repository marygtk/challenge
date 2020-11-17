describe('Front TEST', () => {

    before(()=>{
       cy.visitPage();
    })

    it('Post a comment on my test App', () => {
        cy.post("")
    })
    
     it('Edit a post', () => {
         cy.edit("mandioca", {force: true});
        //  cy.xpath("//div[contains(text(),'mandioca')]").should('have.value', "mandioca");
     });

    it('Delete posts', () => {
        cy.delete({force: true});
    })

})
