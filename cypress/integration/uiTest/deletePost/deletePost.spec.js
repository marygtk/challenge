describe('Front TEST', () => {
    before(()=>{
       cy.visitPage();
    })

    it('Delete Post created', () => {
        cy.task('generateRandomString').then((message)=>{
            cy.post(message)
            cy.delete({force: true}).end();
        })
    })

})
