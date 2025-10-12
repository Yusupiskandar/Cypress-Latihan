describe('Verify dashboard admin panel', () => {
  it('should load admin CMS page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('$ is not defined')) {
        return false
      }
    })

    cy.visit('https://dev-cms.paxel.co/')
    cy.title().should('contain', 'CMS') // contoh verifikasi ringan
    cy.get('.login img[alt="logo"]')
        .should('be.visible')
        .should('have.attr', 'src', 'img/logo.png')
    cy.get('.logo strong')
        .should('contains.text', 'PAXEL')
    cy.get('.logo')
        .should('contains.text', 'CMS')
    cy.get('h3.form-title')
        .should('be.visible')
        .should('contains.text', 'Sign In to your Account')
        //.should('have.strong.text', 'PAXEL')
    cy.get('.gsi-material-button-contents').click()
  })
  //it('', () => {
    
  //});
})
