/// <reference types="cypress" />
import './commands';
import GaragePage from './GaragePage.js';
import FuelExpensesPage from './FuelExpensesPage.js';


const url = Cypress.config("baseUrl")
const login = Cypress.env("LOGIN")
const password = Cypress.env("PASSWORD")


describe("Testing cars and expenses", () => {

    describe('Adding a new car', () => {
        
        beforeEach(() => {
                cy.login(url, login, password);
                cy.get('#userNavDropdown').should('exist')
            })
            
        it('Add new car', () => {
            cy.intercept('POST', '/api/cars').as('createCar')       //https://qauto.forstudy.space/api/cars
            
            GaragePage.clickAddCarButtom()
            GaragePage
            .selectBrandInput('BMW')        //Audi, BMW, Ford, Porsche, Fiat
            .selectModelInput('Z3')         //Audi: TT, R8, Q7, A6, A8
            .typeMileageInput(150)
            .clickAddCarFinishButtom()

            cy.wait('@createCar').then((interception) => {
                cy.log('Query data:', interception.request.body);
                cy.log('Server response:', interception.response.body);
                
                expect(interception.response.statusCode).to.eq(201)
                expect(interception.response.body).to.have.property('data');
                
                const carId = interception.response.body.data.id
                Cypress.env('carId', carId)
                expect(carId).to.be.a('number')
                cy.log('Saved car id', Cypress.env('carId'))  
            })

            cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_base > .car-group > .car_name').contains('BMW Z3')
        })
        
        it('Checking created car exists in the car list through api', () => {
            
            const id = Cypress.env('carId');  

            cy.request('GET', '/api/cars').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.be.an('array')
                
                const myCar = response.body.data.find(car => car.id === id);

                expect(myCar).to.exist;
                expect(myCar.brand).to.eq('BMW');
                expect(myCar.model).to.eq('Z3'); 
                expect(myCar.initialMileage).to.eq(150);
            })
        })
        
    })


    describe('Adding fuel expenses', () => {
        
        beforeEach(() => {
                cy.login(url, login, password);
                cy.get('#userNavDropdown').should('exist')
            })
        

        it('Adding expenses through api', () => {
            
            const id = Cypress.env('carId');
            
            const expense_data = {
                "carId": id,
                "reportedAt": "2026-02-10",
                "mileage": 160,
                "liters": 11,
                "totalCost": 11,
                "forceMileage": false
            }

            cy.log(expense_data['carId'])
            cy.log(expense_data['reportedAt'])
            cy.log(expense_data['mileage'])
            cy.log(expense_data['liters'])
            cy.log(expense_data['totalCost'])
            cy.log(expense_data['forceMileage'])
                
            cy.addExpense(expense_data).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.status).to.eq('ok');
                    expect(response.body.data).to.have.property('id');           
                    expect(response.body.data).to.have.property('carId');
                    expect(response.body.data.carId).to.eq(id);
                    expect(response.body.data).to.have.property('reportedAt');
                    expect(response.body.data.reportedAt).to.eq("2026-02-10");
                    expect(response.body.data).to.have.property('mileage');
                    expect(response.body.data.mileage).to.eq(160);
                    expect(response.body.data).to.have.property('liters');
                    expect(response.body.data.liters).to.eq(11);
                    expect(response.body.data).to.have.property('totalCost');
                    expect(response.body.data.totalCost).to.eq(11);
                    });
        })


        it('Checking existing expense on Fuel Expenses page', () => {

            const id = Cypress.env('carId');  
    
            cy.request('GET', '/api/cars').then((response) => {
                const myCar = response.body.data.find(car => car.id === id);
                
                expect(myCar).to.exist;
                expect(myCar.brand).to.eq('BMW');
                expect(myCar.model).to.eq('Z3');
                expect(myCar.initialMileage).to.eq(150);
                const brand = myCar.brand
                const model = myCar.model

                cy.log(brand)
                cy.log(model)

                FuelExpensesPage
                    .clickFuelExpensesSidebarBtn()

                FuelExpensesPage
                    .selectFuelExpensesDropdown(`${brand} ${model}`)       //'BMW Z3'
        
                cy.get('tr').filter(':contains("10.02.2026")')
                    .filter(':contains("160")')
                    .filter(':contains("11L")')
                    .filter(':contains("11.00 USD")')
                    .should('exist')

            })
        })
    })

})