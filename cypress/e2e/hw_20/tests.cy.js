/// <reference types="cypress" />
import UserRegister from './UserRegiste.js'
import './commands';


describe('registration', () => {
  
  describe.skip('name field checks', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
          auth: {
            username: "guest",
            password: "welcome2qauto"
          }
        }
      )
      
      cy.get('.header_right').contains('Sign In').click()
      cy.get('.modal-footer > .btn-link').click()

    })

    it('Name field, error appears when name is shorter than 2 letters', () => {
      UserRegister
        .typeUserName('T')
        .typeUserLastName('Tomassss')

      UserRegister.userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name has to be from 2 to 20 characters long')
    })

    it('Name field, error appears when name is longer than 21 letters', () => {
      UserRegister
        .typeUserName('TomasTomasTomasTomasT')
        .typeUserLastName('Tomas')

      UserRegister.userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name has to be from 2 to 20 characters long')
    })

    it('Name field, error appears when name is set as 1 digit', () => {
      UserRegister
        .typeUserName('1')
        .typeUserLastName('Tomas')

      UserRegister.userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name has to be from 2 to 20 characters long')
    })

   it('Name field, error appears when name was not set', () => {
      UserRegister
        .userNameInput
        .focus()
        .blur()

      UserRegister.userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name required')
    })

  it('Name field, error appears when name is set as space', () => {
      UserRegister
        .typeUserName(' ')
        .typeUserLastName('Tomas')

      UserRegister.userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name has to be from 2 to 20 characters long')
    })

  it('Name field, error appears when name is set as letter and space', () => {
      UserRegister
        .typeUserName('T ')
        .typeUserLastName('Tomas')

      UserRegister
        .userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name is invalid')
    })

  it('Name field, error appears when name is set as special symbol', () => {
      UserRegister
        .typeUserName('#')
        .typeUserLastName('Tomas')

      UserRegister
        .userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name is invalid')
    })

  it('Name field, error appears when name is set as letters and digit', () => {
      UserRegister
        .typeUserName('Tom1')
        .typeUserLastName('Tomas')

      UserRegister
        .userNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Name is invalid')
    })

  })

  describe.skip('Last name field checks', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
          auth: {
            username: "guest",
            password: "welcome2qauto"
          }
        }
      )
      
      cy.get('.header_right').contains('Sign In').click()
      cy.get('.modal-footer > .btn-link').click()

    })

    it('LastName field, error appears when last name is shorter than 2 letters', () => {
      UserRegister
        .typeUserName('Tomas')
        .typeUserLastName('T')
        .typeUserEmail('a@gmail.com')

      UserRegister.userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name has to be from 2 to 20 characters long')
    })

    it('LastName field, error appears when last name is longer than 21 letters', () => {
      UserRegister
        .typeUserName('Tom')
        .typeUserLastName('TomasTomasTomasTomasT')
        .typeUserEmail('a@gmail.com')

      UserRegister.userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name has to be from 2 to 20 characters long')
    })

  it('LastName field, error appears when name is set as 1 digit', () => {
      UserRegister
        .typeUserName('Tom')
        .typeUserLastName(1)
        .typeUserEmail('a@gmail.com')

      UserRegister.userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name has to be from 2 to 20 characters long')
    })

  it('LastName field, error appears when last name was not set', () => {
      UserRegister
        .userLastNameInput
        .focus()
        .blur()

      UserRegister.userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name required')
    })

  it('LastName field, error appears when name is set as space', () => {
      UserRegister
        .typeUserName('Tom')
        .typeUserLastName(' ')
        .typeUserEmail('a@gmail.com')

      UserRegister.userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name has to be from 2 to 20 characters long')
    })

  it('LastName field, error appears when name is set as letter and space', () => {
      UserRegister
        .typeUserName('Tom')
        .typeUserLastName('t ')
        .typeUserEmail('a@gmail.com')

      UserRegister
        .userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name is invalid')
    })

  it('LastName field, error appears when name is set as special symbol', () => {
      UserRegister
        .typeUserName('Tom')
        .typeUserLastName('$')
        .typeUserEmail('a@gmail.com')

      UserRegister
        .userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name is invalid')
    })

  it('LastName field, error appears when name is set as letters and digit', () => {
      UserRegister
        .typeUserName('Tom')
        .typeUserLastName('Tom1')
        .typeUserEmail('a@gmail.com')

      UserRegister
        .userLastNameInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Last name is invalid')
    })

  })

  describe.skip('Email field checks', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
          auth: {
            username: "guest",
            password: "welcome2qauto"
          }
        }
      )
      
      cy.get('.header_right').contains('Sign In').click()
      cy.get('.modal-footer > .btn-link').click()

    })

    it('Email field, error appears when email has incorrect format', () => {
      UserRegister
        .typeUserName('Tomas')
        .typeUserLastName('Smith')
        .typeUserEmail('gmail.com')
        .typeUserPassword('sdf')

      UserRegister.userEmailInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains('Email is incorrect')
    })

    it('Email field, error appears when email was not set', () => {
      UserRegister
        .userEmailInput
        .focus()
        .blur()

      UserRegister.userEmailInput.should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('.invalid-feedback > p').contains('Email required')
    })

  })

  describe('Password field checks', () => {
    const password_content_error_text = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
    
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
          auth: {
            username: "guest",
            password: "welcome2qauto"
          }
        }
      )
      
      cy.get('.header_right').contains('Sign In').click()
      cy.get('.modal-footer > .btn-link').should('be.visible').click()

    })

    it('Password field, error appears when password was not set', () => {
      UserRegister
        .userPasswordInput
        .focus()
        .blur()

      UserRegister.userPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('.invalid-feedback > p').contains('Password required')
    })
    
    it.only('Password field, error appears when password length is less than 8', () => {
      const short_password = 'SHORT'
      
      UserRegister
        .typeUserName('Tomas')
        .typeUserLastName('Smith')
        .typeUserEmail('emailname@gmail.com')
        .typeUserPassword(short_password)
        
      cy.focused().blur()

      UserRegister.userPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('.invalid-feedback > p').contains(password_content_error_text)
 
      })
    
    it('Password field, error appears when password length is longer than 15 symbols', () => {
      UserRegister
        .typeUserName('Tomas')
        .typeUserLastName('Smith')
        .typeUserEmail('emailname@gmail.com')
        .typeUserPassword('WordWordWordWord1')
        
      cy.focused().blur()

      UserRegister.userPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('.invalid-feedback > p').contains(password_content_error_text)
 
      })
    
    it('Password field, error appears when password contains none digits', () => {
      UserRegister
        .typeUserName('Tomas')
        .typeUserLastName('Smith')
        .typeUserEmail('emailname@gmail.com')
        .typeUserPassword('WorldWorldWorld')
        
      cy.focused().blur()

      UserRegister.userPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('.invalid-feedback > p').contains(password_content_error_text)
 
      })
    
    it('Password field, error appears when password contains none capital', () => {
      UserRegister
        .typeUserName('Tomas')
        .typeUserLastName('Smith')
        .typeUserEmail('emailname@gmail.com')
        .typeUserPassword('worldworldword1')
        
      cy.focused().blur()

      UserRegister.userPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('.invalid-feedback > p').contains(password_content_error_text)
 
      })

    it('Password field, error appears when password contains none lower-cased letter', () => {
      UserRegister
        .typeUserName('Tomas')
        .typeUserLastName('Smith')
        .typeUserEmail('emailname@gmail.com')
        .typeUserPassword('WORLDWORLDWORLDWORD1')
        
      cy.focused().blur()

      UserRegister.userPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('.invalid-feedback > p').contains(password_content_error_text)
 
      })
  })

  describe.skip('Re-enter password field checks', () => {
    const password_repeat_error_msg = 'Passwords do not match'
    const password_empty = 'Re-enter password required'
      
      beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
              username: "guest",
              password: "welcome2qauto"
            }
          }
        )
        
        cy.get('.header_right').contains('Sign In').click()
        cy.get('.modal-footer > .btn-link').should('be.visible').click()  //{force: true}

      })

      it('Repeat password field, error appears when password doesnt match to first password', () => {
        UserRegister
          .typeUserName('Tomas')
          .typeUserLastName('Smith')
          .typeUserEmail('emailname@gmail.com')
          .typeUserPassword('WorldWorldWord1')
          .typeUserRepeatPassword('WorldWorldWord2')
          
        cy.focused().blur()

        UserRegister.userRepeatPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains(password_repeat_error_msg)
      })

      it('Second password field, error appears when the second password was not set', () => {
        UserRegister
          .userRepeatPasswordInput
          .focus()
          .blur()

        UserRegister.userRepeatPasswordInput.should('have.css','border-color','rgb(220, 53, 69)')
        cy.get('.invalid-feedback > p').contains(password_empty)
      })
  })

  describe('Register button', () => {
      beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
              username: "guest",
              password: "welcome2qauto"
            }
          }
        )
        
        cy.get('.header_right').contains('Sign In').click()
        cy.get('.modal-footer > .btn-link').should('be.visible').click()  //{force: true}

      })

      it.skip('Register button active, new user created', () => {
        UserRegister
          .typeUserName('Tomas')
          .typeUserLastName('Smith')
          .typeUserEmail('emailname2@gmail.com')
          .typeUserPassword('WorldWorldWord1')
          .typeUserRepeatPassword('WorldWorldWord1')
          
      cy.get('.modal-footer > .btn').contains('Register').click()
      cy.get('#userNavDropdown').should('exist')
      })


      
    it('Register button, inactive when one of fields populated incorrectly', () => {
        UserRegister
          .typeUserName('Tomas')
          .typeUserLastName('Smith')
          .typeUserEmail('emailname3@gmail.com')
          .typeUserPassword('WorldWorldWord1')
          .typeUserRepeatPassword('WorldWorldWord2')
      
      cy.focused().blur()
      cy.get('.modal-footer > .btn').should('have.attr', 'disabled')
      })

  })

})


