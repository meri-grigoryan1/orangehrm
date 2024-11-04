class LoginPage {
    visit() {
        cy.visit('https://demoblaze.com/');
    }

    clickLogin() {
        cy.get('#login2').click();
    }

    enterUsername(username) {
        cy.get('#loginusername').clear().type(username); // Clear any existing value
    }

    enterPassword(password) {
        cy.get('#loginpassword').clear().type(password); // Clear any existing value
    }

    submitLogin() {
        cy.get('button').contains('Log in').click();
    }

    // verifySuccessfulLogin(username) {
    //     cy.get('#nameofuser', { timeout: 10000 })
    //       .should('contain', `Welcome ${username}`);
    //     cy.get('a').contains('Log out').should('be.visible');
    // }

    verifyErrorAlert(message) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(message);
        });
    }
}

export default new LoginPage();
