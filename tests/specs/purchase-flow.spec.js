import { expect } from 'expect-webdriverio';
import { ENV } from '../../config/env.js';
import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import CartPage from '../pageobjects/CartPage.js';
import CheckoutPage from '../pageobjects/CheckoutPage.js';

describe('SauceDemo purchase flow', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login(ENV.username, ENV.password);
    });

    it('completes the happy-path purchase', async () => {
        await expect(InventoryPage.title).toHaveText('Products');
        await expect(InventoryPage.inventoryItems).toBeElementsArrayOfSize(6);

        await expect(InventoryPage.backpackName('Sauce Labs Backpack')).toBeDisplayed();
        await InventoryPage.addBackpackToCart();
        await InventoryPage.openCart();

        await expect(CartPage.title).toHaveText('Your Cart');
        await expect(CartPage.backpackName).toHaveText('Sauce Labs Backpack');
        await expect(CartPage.backpackPrice).toHaveText('$29.99');
        await expect(CartPage.itemQuantity).toHaveText('1');

        await CartPage.proceedToCheckout();
        await CheckoutPage.enterShippingInformation('John', 'Doe', '12345');

        await expect(CheckoutPage.title).toHaveText('Checkout: Overview');
        await expect(CheckoutPage.subtotalLabel).toHaveText('Item total: $29.99');
        await expect(CheckoutPage.taxLabel).toHaveText('Tax: $2.40');
        await expect(CheckoutPage.totalLabel).toHaveText('Total: $32.39');

        await CheckoutPage.finishCheckout();

        await expect(CheckoutPage.title).toHaveText('Checkout: Complete!');
        await expect(CheckoutPage.confirmationHeader).toHaveText('Thank you for your order!');
    });
});
