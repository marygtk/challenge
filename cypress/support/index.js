// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

require('cypress-xpath')
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("login", (email, password) => {
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#u_0_2").click();
  });

  Cypress.Commands.add("post", (text) => {
    cy.get("div[aria-label='Crear publicación']").click();
    cy.xpath('//body/div/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/span[1]').type(text);
    cy.get('.ihqw7lf3.l9j0dhe7 > .dati1w0a > .oajrlxb2').click();
    
  });
  
  Cypress.Commands.add("edit", (text) => {
    cy.xpath("//*/div/div[1]/div[1]/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div[4]/div[2]/div/div[2]/div[3]/div/div/div[1]/div/div/div/div/div/div/div/div/div/div[2]/div/div[2]/div/div[3]/div").click();
    cy.get(':nth-child(2) > .btwxx1t3 > .j83agx80 > .qzhwtbm6 > .d2edcug0').click();
    cy.get('.rq0escxv > ._5rp7 > ._5rpb > .notranslate > [data-contents="true"] > [data-block="true"] > ._1mf').clear().type(text);
    cy.get('.ihqw7lf3.l9j0dhe7 > .dati1w0a > .oajrlxb2').click();
    
  })


  Cypress.Commands.add("delete", () => {
    cy.xpath("//*/div/div[1]/div[1]/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div[4]/div[2]/div/div[2]/div[3]/div/div/div[1]/div/div/div/div/div/div/div/div/div/div[2]/div/div[2]/div/div[3]/div").click();
    cy.get('.tojvnm2t > :nth-child(3)').click();
    cy.get('.ihqw7lf3 > .i1fnvgqd > :nth-child(1) > .synb87wq > .pfnyh3mw > .rq0escxv > .d2edcug0 > .a8c37x1j').click();
    
  });

  // Cypress.Commands.add("visitPage", () => {
  //   cy.visit(testValues.firstUrl)
  //   cy.get('body').then(($body) => {
  //       if ($body.find("a[action='cancel']").length)
  //       {
  //           cy.get("a[action='cancel']").click()
  //       }
  //   }); 
  // });