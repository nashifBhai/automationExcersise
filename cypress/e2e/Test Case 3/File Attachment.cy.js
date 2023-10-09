describe('File Attachment', () => {

  it('new user sign up', () => {
    cy.visit('https://html.com/input-type-file/');
    cy.wait(10000);
    //double click
    let p = "sample.png";
    cy.get(`#fileupload`).selectFile(p);
    cy.wait(8000);
    cy.get(`input[value='submit']`).click();
    //this.element.browseFile().click({force: true}).selectFile({force: true},p);
    //cy.wait(8000);
    //this.element.uploadFile().should('be.visible').click(); 

    //cy.wait(10000);
    //cy go and back
    //cy.go('back');
    //cy.wait(10000);
    //cy.go('forward');
    //reload()
    //cy.wait(10000);
    //cy.reload();

  })

  it('new user sign up', () => {
    cy.visit('https://www.batabd.com/');
    cy.wait(10000);
    //double click
    cy.get(`a[title='User Icon']`).dblclick();
    cy.wait(10000);
    //cy go and back
    cy.go('back');
    cy.wait(10000);
    cy.go('forward');
    //reload()
    cy.wait(10000);
    cy.reload();

  })
})