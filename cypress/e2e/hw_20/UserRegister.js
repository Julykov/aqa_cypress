class UserRegister {
    
    get userNameInput() {
        return cy.get('#signupName')
    }

    get userLastNameInput() {
        return cy.get('#signupLastName')
    }

    get userEmailInput() {
        return cy.get('#signupEmail')
    }

    get userPasswordInput() {
        return cy.get('#signupPassword')
    }

    get userRepeatPasswordInput() {
        return cy.get('#signupRepeatPassword')
    }

    getRegisterButton() {
        return cy.get('button[type="button"]')
    }

    typeUserName(user_name) {
        this.userNameInput.type(user_name)
        return this
    }

    typeUserLastName(user_lastname) {
        this.userLastNameInput.type(user_lastname)
        return this
    }

    typeUserEmail(user_email) {
        this.userEmailInput.type(user_email)
        return this
    }

    typeUserPassword(user_pasword) {
        this.userPasswordInput.type(user_pasword, {sensitive:true})
        return this
    }

    typeUserRepeatPassword(user_repeat_pasword) {
        this.userRepeatPasswordInput.type(user_repeat_pasword, {sensitive:true})
        return this
    }

}


export default new UserRegister();