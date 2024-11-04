class ProductPage {
    clickFirstProduct() {
        cy.get('.card-title a').first().click();
    }

    addToCart() {
        cy.get('#tbodyid > div:nth-child(2) > div > a').click();
    }

    confirmProductAddedAlert() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added');
        });
    }
}

export default new ProductPage();
