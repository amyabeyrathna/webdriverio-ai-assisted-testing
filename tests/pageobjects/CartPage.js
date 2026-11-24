class CartPage {
    get title() {
        return $('[data-test="title"]');
    }

    get cartItem() {
        return $('[data-test="inventory-item"]');
    }

    get backpackName() {
        return $('[data-test="inventory-item-name"]');
    }

    get backpackPrice() {
        return $('[data-test="inventory-item-price"]');
    }

    get itemQuantity() {
        return $('[data-test="item-quantity"]');
    }

    get checkoutButton() {
        return $('[data-test="checkout"]');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();
