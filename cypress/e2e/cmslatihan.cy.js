describe('Verify dashboard admin panel', () => {
  //handling error from cms admin panel --> $
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
    //cy.get('.gsi-material-button-contents').click()
    cy.get('[name="username"]').type('yusupiskandar', {delay: 100})
    cy.get('[name="username"]').should('have.value', 'yusupiskandar')
    cy.get('[name="password"]').type('masuk123', {delay: 100})
    cy.get('[name="password"]').should('have.value', 'masuk123')
    cy.get('.form-actions > .submit').click()
    cy.get('.dropdown > .dropdown-toggle').click()
    cy.get('#logout-link').click()
  })
  it.only('Verify profile cms', () => {
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
    //cy.get('.gsi-material-button-contents').click()
    cy.get('[name="username"]').type('yusupiskandar', {delay: 100})
    cy.get('[name="username"]').should('have.value', 'yusupiskandar')
    cy.get('[name="password"]').type('masuk123', {delay: 100})
    cy.get('[name="password"]').should('have.value', 'masuk123')
    cy.get('.form-actions > .submit').click()
    cy.get('.dropdown > .dropdown-toggle').click()
    //cy.get('#logout-link').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('h3').should('be.visible').should('contains.text', 'Profile')
    cy.get('.page-title > span').should('be.visible').should('contains.text', 'Welcome to PAXEL CMS, yusupiskandar')
    cy.get(':nth-child(34) > [href="javascript:void(0);"]').click()
    cy.get('ul.sub-menu a')
      .contains('a', 'Cities').should('be.visible')
    cy.get('ul.sub-menu a')
      .contains('a', 'Districts').should('be.visible')
    cy.get('ul.sub-menu a')
      .contains('a', 'Zipcode').should('be.visible')
    cy.get('ul.sub-menu a')
      .contains('a', 'Areacode').should('be.visible')
    cy.get('ul.sub-menu a')
      .contains('a', 'Intracity Coverage').should('be.visible').click()
  })


})
