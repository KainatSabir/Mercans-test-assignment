import loginPage from '../pages/LoginPage';   
import logoutPage from '../pages/Logout'; 

describe('Security & Session Management', () => {

  const email = Cypress.env('Email');
  const password = Cypress.env('Password');
  

  const homepageTitle = loginPage.homepageTitle; 
  
  const loginPageTitle = logoutPage.loginTitle;

  it('should successfully log in and then log out of the application', () => {

 const email = Cypress.env('userEmail');
    const password = Cypress.env('userPassword');
    cy.visit('/login'); 
    
    loginPage.login(email, password);

    logoutPage.logout();

  });
});