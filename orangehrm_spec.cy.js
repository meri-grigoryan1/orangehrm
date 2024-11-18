// cypress/e2e/orangehrm_spec.js
import LoginPage from '../support/pages/LoginPage';
import MyInfoPage from '../support/pages/MyInfoPage';

describe('OrangeHRM My Info Update Test', () => {
    it('Logs in and updates personal info', () => {
        // Visit and login
        LoginPage.visit();
        LoginPage.login('Admin', 'admin123'); // Replace with actual credentials

        // Navigate to "My Info" and update information
        MyInfoPage.navigateToMyInfo();
        MyInfoPage.updatePersonalInfo('NewFirstName', 'NewLastName');

        // Optionally, add assertions to verify changes
        cy.get('[name="firstName"]').should('have.value', 'NewFirstName');
        cy.get('[name="lastName"]').should('have.value', 'NewLastName');
    });
});
