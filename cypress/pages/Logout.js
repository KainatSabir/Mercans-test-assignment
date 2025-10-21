class Logout {
  constructor() {
    this.profiledetails= '.profile-menu__employee-info';
    this.signoutbtn = '.profile-dropdown__sign-out';
    this.loginTitle = '.header__title'; 
  }

  logout() {
 
    cy.get(this.profiledetails).should('be.visible') .click();
 
    cy.get(this.signoutbtn).should('be.visible').click();
   
     cy.get(this.loginTitle , { timeout: 18000 }).should('be.visible'); 
  }
}


export default new Logout();