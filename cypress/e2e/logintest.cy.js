import loginPage from '../pages/LoginPage'; 

describe('Login Functionality', () => {
  it('should successfully log in a user', () => {

    const email = Cypress.env('userEmail');
    const password = Cypress.env('userPassword');
    cy.visit('/login'); 
    
    loginPage.login(email, password);

  });
});