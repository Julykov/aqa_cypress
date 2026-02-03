class FuelExpensesPage {
    
    // get userNameInput() {
    //     return cy.get('#signupName')
    // }

    get fuelExpensesSidebarBtn() {
        return cy.get('[routerlink="expenses"]')
    }

    get fuelExpensesDropdown() {
        return cy.get('#carSelectDropdown')
    }

    get addFuelExpensesBtn() {
        return cy.get('.btn-primary')
    }

    get litersNumInput() {
        return cy.get('[name="liters"]')
    }

    get mileageExistingInput() {
        return cy.get('[name="mileage"]')
    }

    get totalCostInput() {
        return cy.get('[name="totalCost"]')
    }

    get fuelExpensesSubmitBtn() {
        return cy.get('.modal-footer > .btn-primary')
    }

    
    clickFuelExpensesSidebarBtn() {
        this.fuelExpensesSidebarBtn.click()
    }

    selectFuelExpensesDropdown(car) {
        this.fuelExpensesDropdown.click()
        cy.get('.dropdown-item').contains(car).should('be.visible').click({force:true});
        return this
    }

    clickAddFuelExpensesBtn() {
        this.addFuelExpensesBtn.click()
    }

    typeLitersNumInput(lit_num) {                    
        this.litersNumInput.type(lit_num)
        return this
    }

    typeTotalCostInput(tot_cost) {                    
        this.totalCostInput.type(tot_cost)
        return this
    }

    clickFuelExpensesSubmitBtn() {
        this.fuelExpensesSubmitBtn.click()
    }

    increaseMileage(offset) {
        this.mileageExistingInput.invoke('val').then((currentValue) => {
            const newValue = Number(currentValue) + offset;
            this.mileageExistingInput.clear().type(newValue.toString());
        });
    }


    // typeUserName(user_name) {
    //     this.userNameInput.type(user_name)
    //     return this
    // }

}


export default new FuelExpensesPage();