describe('Assertions', () => {
    beforeEach(() => {
      // match any request that exactly matches the URL
    })
  
    it('list of assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //Element Should exist
        cy.get(`.oxd-text.oxd-text--h5.orangehrm-login-title`).should('exist');
        //Assert that an element has a certain text
        cy.get(`.oxd-text.oxd-text--h5.orangehrm-login-title`).should('have.text', 'Login');
        //Assert that an element has a certain class:
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('have.class', 'oxd-text oxd-text--h5 orangehrm-login-title');
        //Assert that an element is visible:
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('be.visible');
        //Assert that an element contains a certain text:
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('contain', 'Login');
        //Assert that an element is enabled:
        cy.get(`button[type='submit']`).should('be.enabled');
        //Assert that multiple assertions are true:
        cy.get(`button[type='submit']`).should('be.enabled').and('have.class', 'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button');
        //Assert that the value of an element is equal to a certain value:
        cy.get(`input[placeholder='Username']`).type("Admin").should('have.value', 'Admin');
        //Assert that the length of an element is equal to a certain number:
        cy.get(`input`).should('have.length', 3);
        //Assert that the text of an element does not contain a certain substring:
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('not.contain', 'This is not my substring');
        //Assert that an element is not present in the DOM:
        cy.get('.oxd-text.oxd-text--h5.orangehrm').should('not.exist');

  });

  //it('list of assertions', () => {
    //cy.visit('https://www.automationexercise.com/login');
    //cy.get(`div[class='signup-form'] h2`).should('exist');
//});
})