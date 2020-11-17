Cypress.Commands.add("getAll", (url,callback,postId) => {
    cy.request('GET',url).then((res)=>{
        callback(res,postId)
    })
});

Cypress.Commands.add("postCustom", (url,callback) => {
    cy.request('POST',url).then((res)=>{
        callback(res)
    })
});

Cypress.Commands.add("deleteCustom", (url,callback) => {
    cy.request('DELETE',url).then((res)=>{
        expect(res).to.have.property('status',200)
        expect(res.body.data).to.not.be.null
        callback(res)
    })
});

Cypress.Commands.add("getToken", async() => {
    let token = null;
    cy.request('GET',"https://graph.facebook.com/103403178261280/accounts?access_token=EAAD9TbXADHUBANRqnlZCZCt2NsOcDZAv3AK3MEtwNAZBh45k9gAESXQZC66EPp4M1koytU2OXF3IppAhyTlVNbuOAZCSdmSKIoyWghRS8ZBCt7KJ4qRJy0kmaZBBUw7VMHNu4UyEeT3ewKEKSZAhbTm6zLjKTXETQNUbvI56jjhv0Ydd96KJ3oZA66O8umfi6L4kZAakDTU1BuY9R33ZBa2c6yzO").then((res)=>{
        const page = res.data.data.find(e => e.name === "Agile engine Test mariassa");
        token = page.access_token
    })
    return token 
});




