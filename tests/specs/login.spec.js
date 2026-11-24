import { expect } from 'expect-webdriverio';
import { ENV } from '../../config/env.js';
import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import USERS from '../../data/users.js';

describe('SauceDemo login', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('logs in successfully with the configured standard user', async () => {
        await LoginPage.login(ENV.username, ENV.password);

        await expect(InventoryPage.title).toHaveText('Products');
        await expect(LoginPage.errorMessage).not.toBeDisplayed();
    });

    it('shows an error when the locked-out user attempts to log in', async () => {
        await LoginPage.login(USERS.lockedUser.username, ENV.password);

        await expect(LoginPage.errorMessage).toHaveText(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });
});
