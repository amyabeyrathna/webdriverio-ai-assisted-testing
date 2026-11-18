import LoginPage from '../pageobjects/login.page.js';
import USERS from '../../data/users.js'

describe('SauceDemo Login', () => {
    before(async () => {
        LoginPage.open();
    })

    it('should successfully login with a valid user', async () => {
        await browser.pause(3000);
       LoginPage.usernameInput.setValue(USERS.standardUser.username);
       await browser.pause(3000);
       LoginPage.passwordInput.setValue(USERS.standardUser.password);
       await browser.pause(3000);
       LoginPage.loginButton.click();

    });

});
