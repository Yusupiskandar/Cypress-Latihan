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
        //cek coloum lacak pengiriman
        cy.get('#awb-text-area')
        cy.should('be.visible')
        cy.should('have.attr', 'placeholder', 'EM.XXXXXXXXXX-20XXXXXX-X-XXXXXX\nEM.XXXXXXXXXX-20XXXXXX-X-XXXXXX')
        //cek button
        cy.get('#track-captcha')
        cy.should('be.visible')
        cy.should('contain.text', 'Lacak Pengiriman')
        //cek tombol disable
        cy.get('#track-captcha')
        cy.should('have.class', 'disabled')
        //Klik tombol (jika tidak disabled)
        //cy.get('#track-captcha').click()
    })

})