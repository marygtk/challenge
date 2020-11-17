

describe('SCRUD Test', () => {
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

    it('Create a post', ()=>{
        cy.get('@testValues').then((testValues)=>{
            cy.task('generateRandomString').then((message)=>{
                const url = `${testValues.urlMain}/110318354227119/feed?message=${message}&access_token=${token}`
                cy.request('POST',url).then((res)=>{
                    expect(res).to.have.property('status',200)
                    expect(res.body.id).to.not.be.null
                    postId = res.body.id;
                })
            })
        })
    });

    it('Obtain the post previuosly created', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/110318354227119/feed?access_token=${token}`
            const callback = (res,postId)=>{
                const postCrated = res.body.data.find(e => e.id === postId)
                expect(res).to.have.property('status',200)
                expect(postCrated).to.not.be.null
                expect(postCrated.id).to.be.equal(postId)
            }
            cy.getAll(url,callback,postId);
        })
    });

    it('Update post obtenied', ()=>{
        cy.get('@testValues').then((testValues)=>{
            cy.task('generateRandomString').then((message)=>{
                const url = `${testValues.urlMain}/110318354227119/feed?message=${message}holaaaaaaa&access_token=${token}`
                cy.request('POST',url).then((res)=>{
                    expect(res).to.have.property('status',200)
                    expect(res.body.id).to.not.be.null
                    postId = res.body.id;
                })
            })
        })
    });

    it('Delete post by id', ()=>{
        cy.get('@testValues').then((testValues)=>{
            const url = `${testValues.urlMain}/${postId}?access_token=${token}`
            const callBack = res=>expect(res.body.success).to.be.equal(true)
            cy.deleteCustom(url,callBack)
        })
    })

});
