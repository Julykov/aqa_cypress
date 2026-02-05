/// <reference types="cypress" />
import './commands';
import GaragePage from './GaragePage.js';
import FuelExpensesPage from './FuelExpensesPage.js';


const url = Cypress.config("baseUrl")
const login = Cypress.env("LOGIN")
const password = Cypress.env("PASSWORD")


describe('Adding a new car', () => {
    beforeEach(() => {
            cy.login(url, login, password);
            cy.get('#userNavDropdown').should('exist')
        })
        
    it('Add new car', () => {
        GaragePage.clickAddCarButtom()
        GaragePage
        .selectBrandInput('BMW')        //Audi, BMW, Ford, Porsche, Fiat
        .selectModelInput('Z3')         //Audi: TT, R8, Q7, A6, A8
        .typeMileageInput(150)
        .clickAddCarFinishButtom()

        cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_base > .car-group > .car_name').contains('BMW Z3')
    })

    

})


describe('Adding fuel expenses', () => {
    beforeEach(() => {
            cy.login(url, login, password);
            cy.get('#userNavDropdown').should('exist')
        })
        
    it('Adding fuel expenses on Fuel Expenses page', () => {
        FuelExpensesPage
            .clickFuelExpensesSidebarBtn()
            
        FuelExpensesPage
            .selectFuelExpensesDropdown('BMW Z3')   //Audi TT, BMW Z3
            .clickAddFuelExpensesBtn()
        
        FuelExpensesPage
            .increaseMileage(10)
        
        FuelExpensesPage
            .typeLitersNumInput(10)
            .typeTotalCostInput(100)
            .clickFuelExpensesSubmitBtn()

        cy.get('tbody > tr > :nth-child(2)').should('exist').contains('160')
        cy.contains('tr', '03.02.2026').find('td').should('contain', '100')
    })

})
