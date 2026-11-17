import LoginPage from '../pageobjects/login.page.js';

describe('SauceDemo login @smoke', () => {
    it('logs in with a valid user', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(LoginPage.productsTitle).toHaveText('Products');
    });
});
