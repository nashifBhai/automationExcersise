describe('Register and Login', () => {
  beforeEach(() => {
    // match any request that exactly matches the URL
    cy.visit('https://testautomationpractice.blogspot.com/');
  })
it.only('table data verification', () => {
  //wait for 6 s
  cy.wait(1000);
  cy.xpath(`//table[position()=1]//tbody[position()=1]//tr[2]//td[contains(text(),'Learn Selenium')]`).should('have.text', 'Learn Selenium');;
});

  })