class GaragePage {
    
    get addCarButtom() {
        return cy.get('.panel-page_heading > .btn')
    }

    get brandInput() {
        return cy.get('[name="carBrandId"]')
    }

    get modelInput() {
        return cy.get('[name="carModelId"]')
    }

    get mileageInput() {
        return cy.get('[name="mileage"]')
    }

    get addCarFinishButtom() {
        return cy.get('.modal-footer > .btn-primary')
    }

    clickAddCarButtom() {
        this.addCarButtom.click()
    }

    selectBrandInput(brand_name) {                    
        if (brand_name != 'Audi') {
            this.brandInput.select(brand_name)
            return this
        }
    }

    selectModelInput(model_name) {                   
        this.modelInput.select(model_name)
        return this
    }

    typeMileageInput(mileage) {                    
        this.mileageInput.type(mileage)
        return this
    }

    clickAddCarFinishButtom() {
        this.addCarFinishButtom.click()
    } 

    

    // get userNameInput() {
    //     return cy.get('#signupName')
    // }

    // typeUserName(user_name) {
    //     this.userNameInput.type(user_name)
    //     return this
    // }

}


export default new GaragePage();