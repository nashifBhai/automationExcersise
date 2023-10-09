const loginPageObjs = require("../page_objects/login.page");
const homePageObjs = require("../page_objects/home.page");
const myInfoPageObjs = require("../page_objects/myInfo.page");
const testData = require("../../fixtures/credentials.json");

beforeEach({retries: { runMode: 2, openMode: 1,},},() => {
    // open the application and verify elements
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //verify login resource
    cy.loginResource();
});

afterEach(() => {
    // ensure clean test slate for these tests
    //cy.then(Cypress.session.clearCurrentSessionData);
});

describe("Login Verification for User", () => {
    it("Check Login Pages for Wrong credentials", {retries: { runMode: 2, openMode: 1,},}, () => {
        //retries for retry attempt to run again
        loginPageObjs.loginWrongFunctionality();
    });

    it("Check Login Pages for right credentials", () => {
        //login with general approach
        loginPageObjs.loginFunctionality();
        //intercept with link
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/events/push').as('login');
        //cy.wait(20000) // default request Timeout will be overwritten by this value
        cy.wait('@login');
        cy.wait(3000);
        homePageObjs.homePageAssertions();
        //intercept with api
        cy.intercept('Get', '/web/index.php/*').as('indexPage');
        //cy.wait('@indexPage');
        //cy.then(Cypress.session.clearCurrentSessionData);
        // click on my InfoMenu
        //homePageObjs.myInfoMenuClicked();
        cy.wait(10);
    });
});

describe("Update of My Info", () => {
    it("Add information of user", () => {
        //login with Json Data
        loginPageObjs.loginFunctionalityJson(testData.username, testData.password);
        // click on my Info Menu
        homePageObjs.myInfoMenuClicked();
        // add data to My Info
        myInfoPageObjs.addMyInfo();
        //reload the page
        cy.reload();
        // download file
        myInfoPageObjs.downloadFile();
        //remove file
        myInfoPageObjs.fileRemove();
        // read file
        myInfoPageObjs.fileRead();
    });

    it("JQuery", () => {
        //login with JQuery
        loginPageObjs.loginFunctionalityJquery();
    });
});