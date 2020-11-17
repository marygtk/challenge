describe('getPost', () => {
    let postId = null;
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

    it('Get all post of the one page and select one', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/1108715952628112/feed?access_token=${token}`
            cy.request('GET',url).then((res)=>{
                expect(res).to.have.property('status',200)
                expect(res.body.data).to.not.be.null;
                const randomNum = Math.floor((Math.random() * res.body.data.length) + 1);
                postId = res.body.data[randomNum].id;
            })
        })
    })


    it('Delete post by id', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/${postId}?access_token=${token}`
            const callBack = res=>expect(res.body.success).to.be.equal(true)
            cy.deleteCustom(url,callBack)
        })
    })

});
