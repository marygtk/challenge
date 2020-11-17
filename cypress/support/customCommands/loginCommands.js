Cypress.Commands.add("login", (email, password) => {
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#u_0_2").click();
});

 Cypress.Commands.add("visitPage", () => {
    cy.fixture('fb.json').as('testValues').then(()=>{})
    cy.get('@testValues').then((testValues) => {
        cy.visit(testValues.firstUrl)
        cy.setCookie('fr', '1somO7X8ZVG8xrOl3.AWUiK6qpQuaiLffXuQLR_XGoGs4.Bfst9N.f_.AAA.0.0.Bfst9N.AWWYkavTO3U')
        cy.setCookie('xs', '22%3Adkp9u-7db0tFjw%3A2%3A1605558093%3A-1%3A-1')
        cy.setCookie('datr', 'St-yX6k5ItoehBtdVNGmNh3H')
        cy.setCookie('c_user', '100057747934921')
        cy.setCookie('spin', 'r.1002983559_b.trunk_t.1605558112_s.1_v.2_')
        cy.setCookie('wd', '1000x660')
        cy.login(testValues.email, testValues.password)
        cy.xpath('//*/div/div[1]/div[1]/div[3]/div/div/div[1]/div[1]/div/div/div/div[3]/div').click();
        cy.visit(testValues.firstUrl)
        // cy.xpath('//*/div/div[1]/div[1]/div[2]/div[3]/div/div[1]/div[1]/ul/li[4]/span/div/a').click();
        // cy.get("//body/div[1]/div/div[1]/div[1]/div[3]/div/div/div[1]/div[1]/div/div[1]/div[2]/ul/li[1]/div",{force:true}).click();
    });
});