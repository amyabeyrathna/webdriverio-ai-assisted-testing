import { expect } from 'expect-webdriverio';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import LazyLoadPage from '../pageobjects/dynamicCatalogLazyLoad.page.js';
import USERS from '../../data/users.js'

describe('Validate Inventory Page', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.usernameInput.setValue(USERS.standardUser.username);
        await LoginPage.passwordInput.setValue(USERS.standardUser.password);
        await LoginPage.loginButton.click();
    })

    it('Validate inventory page elements', async () => {
       await expect(InventoryPage.header).toBeDisplayed();
       await expect(InventoryPage.title).toBeDisplayed();
       await expect(InventoryPage.shoppingCart).toBeDisplayed();
       await expect(InventoryPage.filter).toBeDisplayed();
    });

    it('ValidateDynamic Catalog - Lazy load page', async () => {
       await InventoryPage.menus.waitForDisplayed();
       await InventoryPage.menus.click();
       await InventoryPage.dynamicCatalogMenu.waitForDisplayed();
       await InventoryPage.dynamicCatalogMenu.click();
       await InventoryPage.dynamicCatalogLazyLoad.waitForDisplayed();
       await InventoryPage.dynamicCatalogLazyLoad.click();
       await expect(LazyLoadPage.header).toBeDisplayed();
     });
 
});