import LoginPage from './test/loginPage';
import ProductPage from './test/productPage';


describe('Demoblaze Website Tests', () => {
    const username = 'tesTuser123'; // Ensure this is the correct username
    const password = '123456'; // Ensure this is the correct password

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Test Successful Login', () => {
        LoginPage.clickLogin();
        LoginPage.enterUsername(username);
        cy.wait(2000)
        LoginPage.enterPassword(password);
        LoginPage.submitLogin();

        // Verify login alert and wait for the user to be logged in
        cy.wait(1000); // Optional wait for any loading to finish
        LoginPage.verifySuccessfulLogin(username);
    });

    it('Test Add to Cart Functionality for a Product', () => {
        ProductPage.clickFirstProduct();
        cy.wait(1000); // Wait for the product page to load
        ProductPage.addToCart();
        ProductPage.confirmProductAddedAlert();
    });

});