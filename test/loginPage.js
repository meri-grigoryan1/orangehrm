// cypress/e2e/pages/LoginPage.js

import loginLocators from './locators/loginlocators';

class LoginPage {
    visit() {
        cy.visit('https://demoblaze.com/');
    }

    clickLogin() {
        cy.get(loginLocators.loginButton).click();
        cy.wait(2000);
    }

    enterUsername(username) {
        cy.get(loginLocators.usernameInput)
          .type(username); // Clear any existing value
    }

    enterPassword(password) {
        cy.get(loginLocators.passwordInput)
          .clear().type(password); // Clear any existing value
    }

    submitLogin() {
        cy.wait(2000);
        cy.get(loginLocators.submitLoginButton).click();
    }

    verifySuccessfulLogin(username) {
        cy.get(loginLocators.welcomeMessage, { timeout: 10000 })
          .should('contain', `Welcome ${username}`);
        cy.get(loginLocators.logoutLink).should('be.visible');
    }

    verifyErrorAlert(message) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(message);
        });
    }
}

export default new LoginPage();
