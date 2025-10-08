describe("Login Page Test", () => {
    it('Visit Login Page', () => {
        cy.visit("https://paxel.co/");
        cy.get('img[alt="Paxel"]')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('include', 'paxel_logo_whitetext.png')

        //cy.title(). should("eq", "Kirim Paket Sameday Delivery - Kirim Paket Berat - Paxel");
        cy.get('h4.header-track-shipment-title.tx-purple')
        cy.should('be.visible')
        cy.should('contain.text', 'Lacak Pengiriman')
    })

})