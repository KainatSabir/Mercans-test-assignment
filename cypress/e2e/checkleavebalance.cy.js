
import loginPage from '../pages/LoginPage';    
import applyLeavePage from '../pages/CheckLeaveBalance'; 

describe('Leave Request Workflow', () => {


  const email = Cypress.env('userEmail');
  const password = Cypress.env('userPassword');
  

  it('should successfully log in, navigate to My Leaves, and open the Add New Leave modal', () => {
    
    
    cy.visit('/login'); 
    
    loginPage.login(email, password);
    
    applyLeavePage.viewAndCloseAnnualBalance();


  });
});