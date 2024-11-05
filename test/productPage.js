class ProductPage {
    clickFirstProduct() {
        cy.get('.card-title a').first().click();
    }

    addToCart() {
        cy.get('[onclick="addToCart(1)"]').click();
    }

    confirmProductAddedAlert() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added');
        });
    }
}

export default new ProductPage();
