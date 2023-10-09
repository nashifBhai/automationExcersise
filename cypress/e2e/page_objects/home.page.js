class homePage {
    element = {
        //Property
        //locator
        banner: () => cy.xpath(`//img[@alt='client brand banner']`),
        dashboardTitle: () => cy.xpath(`//h6[normalize-space()='Dashboard']`),
        helpBtn: () => cy.get(`button[title='Help']`),
        timeAtWorkTitle: () => cy.xpath(`//p[normalize-space()='Time at Work']`),
        gantChart: () => cy.xpath(`//div[@class='emp-attendance-chart']//canvas`),
        myActionsTitle: () => cy.xpath(`//p[normalize-space()='My Actions']`),
        quickLaunchTitle: () => cy.xpath(`//p[normalize-space()='Quick Launch']`),
        buzzLatestPostsTitle: () => cy.xpath(`//p[normalize-space()='Buzz Latest Posts']`),
        employeesOnLeaveTodayTitle: () => cy.xpath(`//p[normalize-space()='Employees on Leave Today']`),
        employeeDistributionbySubUnitTitle: () => cy.xpath(`//p[normalize-space()='Employee Distribution by Sub Unit']`),
        empDistbyLocTitle: () => cy.xpath(`//p[normalize-space()='Employee Distribution by Location']`),
        pieChart: () => cy.get(`#wmpHNlxF`),
        menuItems: () => cy.get(`ul[class='oxd-main-menu']`),
        search: () => cy.xpath(`//input[@placeholder='Search']`),
        myInfoIcon: () => cy.xpath(`//a[@class='oxd-main-menu-item']//*[name()='svg']`),
        myInfoMenuClick: () => cy.get(`ul[class='oxd-main-menu']`)
    }
    // Functions 
    homePageAssertions() {
      this.element.banner().should('be.visible');
      this.element.dashboardTitle().should('exist');
      this.element.helpBtn().should('not.be.disabled');
      this.element.timeAtWorkTitle().should('be.visible');
      this.element.gantChart().should('be.visible');
      this.element.myActionsTitle().should('be.visible');
      this.element.quickLaunchTitle().should('be.visible');
      this.element.buzzLatestPostsTitle().should('be.visible');
      this.element.employeesOnLeaveTodayTitle().should('be.visible');
      this.element.employeeDistributionbySubUnitTitle().should('be.visible');
      this.element.empDistbyLocTitle().scrollIntoView().should('be.visible');
      cy.wait(3000);
      //this.element.pieChart().scrollIntoView().should('be.visible');
      this.element.menuItems().should('be.visible');
      this.element.search().should('be.empty').clear().type("My Info");
      this.element.myInfoIcon().should('be.visible');
    }

    myInfoMenuClicked() {
      this.element.menuItems().should('be.visible');
      this.element.search().should('be.empty').clear().type("My Info");
      this.element.myInfoIcon().should('be.visible');
      this.element.myInfoMenuClick().should('be.visible').click();
      this.element.helpBtn().should('not.be.disabled').and('be.visible');
    }
}
module.exports = new homePage();