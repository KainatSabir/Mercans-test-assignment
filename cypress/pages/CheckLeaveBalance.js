class CheckLeaveBalance {
  constructor() {
    this.quickAccessCard ='.lp-dashboard-card';
    this.LeavePageTitle = '.page-title';
    this.morebtn = '[data-test="leave_details_modal_open"]';
    this.annualLeaveHeading = '.heading.heading-02';
    this.closebtn = '[data-test="leave_details_modal_close"]';
  }

viewAndCloseAnnualBalance() {
  
    cy.get(this.quickAccessCard).click();
    cy.get(this.LeavePageTitle, { timeout: 30000 }).should('be.visible');
    cy.get(this.morebtn).first() .click();

    cy.get(this.annualLeaveHeading, { timeout: 20000 }).should('be.visible').and('contain', 'Annual leave'); 

    cy.get(this.closebtn).click();

    cy.get(this.LeavePageTitle, { timeout: 30000 }).should('be.visible');

  }
}
export default new CheckLeaveBalance();