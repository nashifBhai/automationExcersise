class loginPage {
    element = {
        //Property
        //locator
        upperLogo: () => cy.get(`img[alt='company-branding']`),
        middleRightLogo: () => cy.get(`div[class='orangehrm-login-logo'] img[alt='orangehrm-logo']`),
        loginTitle: () => cy.xpath(`//h5[normalize-space()='Login']`),
        usernameLabel: () => cy.xpath(`//label[normalize-space()='Username']`),
        usernameIcon: () => cy.get(`.oxd-icon.bi-person.oxd-input-group__label-icon`),
        passwordLabel: () => cy.xpath(`//label[normalize-space()='Password']`),
        passwordIcon: () => cy.get(`.oxd-icon.bi-key.oxd-input-group__label-icon`),
        usernameInput: () => cy.get(`input[placeholder='Username']`),
        passwordInput: () => cy.get(`input[placeholder='Password']`),
        loginBtn: () => cy.get(`button[type='submit']`),
        forogtPasswordLink: () => cy.get(`.oxd-text.oxd-text--p.orangehrm-login-forgot-header`),
        cancelBtn: () => cy.xpath(`//button[normalize-space()='Cancel']`),
        invalidCredentialsAlert: () => cy.get(`.oxd-text.oxd-text--p.oxd-alert-content-text`),
        //Jquery
        inputJQuery: (input) => cy.get(`input[placeholder='${input}']`),
    }
    // Functions

    //loginpage elements assertion
    loginPageAssertions() {
      this.element.upperLogo().should('be.visible');
      this.element.middleRightLogo().should('exist');
      this.element.loginTitle().should('be.visible');
      this.element.usernameLabel().should('be.visible');
      this.element.usernameIcon().should('be.visible');
      this.element.passwordLabel().should('be.visible');
      this.element.passwordIcon().should('be.visible');
    }

    loginWrongFunctionality() {
      this.loginPageAssertions();
      this.element.usernameInput().should('be.empty').clear().type("Admin1");
      this.element.passwordInput().should('be.visible').type("admin1234");
      this.element.loginBtn().should('not.be.disabled').click();
      this.element.invalidCredentialsAlert().should('have.text', 'Invalid credentials');
      this.element.forogtPasswordLink().should('be.visible').click();
      cy.wait(2000);
      this.element.cancelBtn().should('not.be.disabled').click();
      this.loginPageAssertions();
    }
    loginFunctionality() {
      this.loginPageAssertions();
      this.element.usernameInput().should('be.empty').clear().type("Admin");
      this.element.passwordInput().should('be.visible').type("admin123");
      this.element.loginBtn().should('not.be.disabled').click();
    }

    loginFunctionalityJson(username, password) {
      this.loginPageAssertions();
      this.element.usernameInput().should('be.empty').clear().type(username);
      this.element.passwordInput().should('be.visible').type(password);
      this.element.loginBtn().should('not.be.disabled').click();
    }

    loginFunctionalityJquery() {
      this.loginPageAssertions();
      this.element.inputJQuery("Username").should('be.empty').clear().type("Admin");
      this.element.inputJQuery("Password").should('be.visible').type("admin123");
      this.element.loginBtn().should('be.visible').then(($body)=>{
        if($body.text().includes("Login")){
          this.element.middleRightLogo().should('exist');
          this.element.loginTitle().should('be.visible');
        }
      });
      this.element.loginBtn().click();
    }
}
module.exports = new loginPage();