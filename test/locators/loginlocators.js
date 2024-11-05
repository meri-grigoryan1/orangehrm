// cypress/e2e/pages/loginLocators.js

const loginLocators = {
    loginButton: '#login2',
    usernameInput: '#loginusername',
    passwordInput: '#loginpassword',
    submitLoginButton: '[onclick="logIn()"]',
    welcomeMessage: '#nameofuser',
    logoutLink: 'a:contains("Log out")'
};

export default loginLocators;
