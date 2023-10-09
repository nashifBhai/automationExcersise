describe('Register and Login', () => {
  beforeEach(() => {
    // match any request that exactly matches the URL
    //cy.intercept('https://www.automationexercise.com/').as('visitURL');

    //cy.visit('https://www.automationexercise.com/');
    cy.visit('https://testautomationpractice.blogspot.com/');
  })

  it.skip('new user sign up', () => {
    //wait for 6 s
    cy.wait(1000);
    // assert the element's text includes the given substring
    cy.get(`a[href='/login']`).should('be.visible').should('contain', 'Login').and('have.text', ' Signup / Login').click();
    cy.get(`[data-qa='signup-name']`).type(`Udenix`);
    //clear for input
    cy.get(`[data-qa='signup-name']`).clear().type(`Udenix`);

    // assert the element's hidden or not hidden
    cy.get(`input[data-qa='signup-email']`).should('not.be.hidden').type(`admin1@udenix.com`);
    // assert the correct value
    cy.get(`[data-qa='signup-name']`).should('have.value', 'Udenix');

    cy.intercept('GET', 'https://pagead2.googlesyndication.com/getconfig/*', []).as('getBooks')
    
    cy.get(`button[data-qa='signup-button']`).should('not.be.disabled').click();
    ///
    //check
    cy.get('[name="title"]').first().check();
    //click
    cy.get('[name="title"]').first().click();
    //cypress built in css selector
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    //dropdown
    cy.get('[data-qa="country"]').select("Canada");
});
})