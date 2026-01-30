Cypress.Commands.add('login', (user_email, password) => {
  cy.visit('https://qauto.forstudy.space/', {
          auth: {
            username: "guest",
            password: "welcome2qauto"
          }
        });
  cy.get('.header_right').contains('Sign In').click()
  
  cy.get('#signinEmail').type(user_email);
  cy.get('#signinPassword').type(password);
  cy.get('.modal-footer > .btn-primary').click();
});


Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})
