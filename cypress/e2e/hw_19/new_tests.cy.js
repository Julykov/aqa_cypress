/// <reference types="cypress" />

describe('qauto app buttons', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: "guest",
          password: "welcome2qauto"
        }
      }
    )

  })

  it('header buttons', () => {
    cy.get('.header_inner').within(() => {
      cy.get('.header_right > .header-link').should('exist')
      cy.get('.header_right > .btn').should('exist')
    });


    cy.get('.header_inner').each(($item) => {
      cy.wrap($item).click(); 
      cy.wrap($item).should('be.visible'); 
    });

    cy.get('.header_right').find('.header-link').should('have.text', 'Guest log in')
    cy.get('.header_right').find('.btn').should('exist').should('have.text','Sign In')
    cy.get('.header_right').should('have.length', 1)

    cy.get('.hero').find('.hero-descriptor_btn').should('exist').should('have.text','Sign up')

  })

  it('footer buttons', () => {
    cy.get('#contactsSection').within(() => {
      cy.get('.contacts_socials').should('exist')
    });

    cy.get('.contacts_socials').find('a').should('have.length', 5)

    cy.get('.align-items-md-end').find('.display-4').should('exist').should('have.text','ithillel.ua')
    cy.get('.align-items-md-end').find('.h4').should('exist').should('have.text','support@ithillel.ua')
    

    cy.contains('ithillel.ua').click()

  })

})


