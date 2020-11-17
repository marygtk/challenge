describe('Front TEST', () => {
    before(()=>{
       cy.visitPage();
    })

    it('Post a comment on my test App', () => {
        cy.task('generateRandomString').then((message)=>{
            cy.post(message)
        })
    })
})
