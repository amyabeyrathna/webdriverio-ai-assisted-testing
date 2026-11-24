class CheckoutPage {
    get title() {
        return $('[data-test="title"]');
    }

    get firstNameInput() {
        return $('[data-test="firstName"]');
    }

    get lastNameInput() {
        return $('[data-test="lastName"]');
    }

    get postalCodeInput() {
        return $('[data-test="postalCode"]');
    }

    get continueButton() {
        return $('[data-test="continue"]');
    }

    get finishButton() {
        return $('[data-test="finish"]');
    }

    get subtotalLabel() {
        return $('[data-test="subtotal-label"]');
    }

    get taxLabel() {
        return $('[data-test="tax-label"]');
    }

    get totalLabel() {
        return $('[data-test="total-label"]');
    }

    get confirmationHeader() {
        return $('[data-test="complete-header"]');
    }

    async enterShippingInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}

export default new CheckoutPage();
