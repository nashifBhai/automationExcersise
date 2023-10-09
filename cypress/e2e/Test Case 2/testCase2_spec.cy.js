const loginPageObjs = require("../page_objects/login.page");
beforeEach(() => {
    // open the application and verify elements
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

afterEach(() => {
    // open the application and verify elements
    cy.reload();
});
describe("Registration Verification for User", () => {

    it("Check Login Pages", () => {
        loginPageObjs.loginFunctionality();
    });

    it("Check Login Pages for wrong data", () => {
        loginPageObjs.loginWrongFunctionality();
    });

    it("Check Login Pages verification", () => {
        loginPageObjs.loginFunctionalityVerification("Admin", "admin123");
    });
});