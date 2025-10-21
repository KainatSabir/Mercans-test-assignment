class Login {
  constructor() {
    this.loginTitle = '.header__title'; 
    this.loginEmail = '[name="email"]';
    this.loginPassword = '[name="password"]';
    this.loginButton = '.button-main__label';
    this.homepageTitle = '.lp-dashboard__title';
  }

  login(email, password) {
 
    cy.get(this.loginTitle , { timeout: 18000 }).should('be.visible'); 
    
    cy.get(this.loginEmail).should('be.visible').and('not.be.disabled').type(email);
    cy.get(this.loginPassword).type(password);
    cy.get(this.loginButton).click();

    cy.get(this.homepageTitle, { timeout: 38000 }).should('be.visible');
  }
}


export default new Login();