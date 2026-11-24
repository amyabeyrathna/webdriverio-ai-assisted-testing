import { expect } from 'expect-webdriverio';
import { ENV } from '../../config/env.js';
import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import Helper from '../../utils/Helper.js';

const sortingScenarios = [
    {
        option: 'Name (A to Z)',
        field: 'names',
        direction: 'ascending'
    },
    {
        option: 'Name (Z to A)',
        field: 'names',
        direction: 'descending'
    },
    {
        option: 'Price (low to high)',
        field: 'prices',
        direction: 'ascending'
    },
    {
        option: 'Price (high to low)',
        field: 'prices',
        direction: 'descending'
    }
];

describe('SauceDemo product sorting', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(ENV.username, ENV.password);
        await InventoryPage.title.waitForDisplayed();
    });

    for (const scenario of sortingScenarios) {
        it(`sorts products using ${scenario.option}`, async () => {
            await InventoryPage.sortProducts(scenario.option);

            await expect(InventoryPage.inventoryItems).toBeElementsArrayOfSize(6);

            const values = scenario.field === 'names'
                ? await InventoryPage.getProductNames()
                : (await InventoryPage.getProductPrices())
                    .map((price) => Number(price.replace('$', '')));

            expect(Helper.isSorted(values, scenario.direction)).toBe(true);
        });
    }
});
