

describe('getPost', () => {

    let token = null;

    before(()=>{
        cy.request('GET',"https://graph.facebook.com/103403178261280/accounts?access_token=EAAD9TbXADHUBANRqnlZCZCt2NsOcDZAv3AK3MEtwNAZBh45k9gAESXQZC66EPp4M1koytU2OXF3IppAhyTlVNbuOAZCSdmSKIoyWghRS8ZBCt7KJ4qRJy0kmaZBBUw7VMHNu4UyEeT3ewKEKSZAhbTm6zLjKTXETQNUbvI56jjhv0Ydd96KJ3oZA66O8umfi6L4kZAakDTU1BuY9R33ZBa2c6yzO").then((res)=>{
            const page = res.body.data.find(e => e.name === "Agile engine Test mariassa");
            token = page.access_token
        })
    })

    beforeEach(()=>{
        cy.fixture('example.json').as("testValues")
    })

    it('Get all post of the one page', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/110318354227119/feed?access_token=${testValues.access_token}`
            const callback = (res)=>{
                expect(res).to.have.property('status',200)
                expect(res.body.data).to.not.be.null
            }
            cy.getAll(url,callback);
        })
    })
});
