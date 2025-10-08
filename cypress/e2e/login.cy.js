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
        // verify logo and kode pengiriman :
        cy.get('.track-shipment-label')
        cy.get('img[alt="paxel awb"]')
        cy.should('be.visible')
        cy.should('have.attr', 'src')
        cy.should('include', 'two-colored-airway-bill.svg')
        // verify <span>Kode Pengiriman:</span>
        cy.contains('span', 'Kode Pengiriman')
        cy.should('be.visible')
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
        //verify label track shipment
        cy.get('.track-shipment-description')
        cy.should('be.visible')
        cy.should('contain.text', 'Kamu bisa masukkan maksimal sampai dengan 20 Kode Pengiriman')
        //Verify Biaya Pengiriman
        cy.get('h4.header-check-rates-shipment-title.tx-purple')
        cy.should('be.visible')
        cy.should('contain.text', 'Biaya Pengiriman')
        //verify <label class="check-rates-shipment-label"> <span>Berat (KG)</span></label>
        cy.get('.check-rates-shipment-label')
        cy.contains('span', 'Berat (KG)')
        cy.should('be.visible')
        cy.get('.input-group')
        cy.get('img[alt="page.wight"]')
        cy.should('be.visible')
        cy.should('have.attr', 'src')
        cy.should('include', 'paxel_icon_parcelbox_small.png')
        cy.get('#weight')
        cy.should('be.visible')
        cy.should('have.attr', 'placeholder', '0')
        cy.get('#validation-value').should('have.class', 'no-spin').should('have.attr', 'type', 'hidden')
        //verify Lokasi Penjemputan


    })

})