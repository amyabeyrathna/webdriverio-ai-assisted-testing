class InventoryPage {
    get title() {
        return $('[data-test="title"]');
    }

    get inventoryItems() {
        return $$('[data-test="inventory-item"]');
    }

    get sortDropdown() {
        return $('[data-test="product-sort-container"]');
    }

    get productNames() {
        return $$('[data-test="inventory-item-name"]');
    }

    get productPrices() {
        return $$('[data-test="inventory-item-price"]');
    }

    get shoppingCart() {
        return $('[data-test="shopping-cart-link"]');
    }

    async sortProducts(option) {
        await this.sortDropdown.selectByVisibleText(option);
    }

    async getProductNames() {
        return this.productNames.map((product) => product.getText());
    }

    async getProductPrices() {
        return this.productPrices.map((price) => price.getText());
    }

    backpackName(name) {
        return $(`//div[@data-test="inventory-item-name" and normalize-space(.)="${name}"]`);
    }

    get addBackpackButton() {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async openCart() {
        await this.shoppingCart.click();
    }
}

export default new InventoryPage();
