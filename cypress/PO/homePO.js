export class Home {

    elementos = {

        btnAcessar: () => cy.contains('div.auth-button__login-text', 'Acessar'),
        btnLanguage: () => cy.get('select.locale-select'),
        btnFichas: () => cy.get('button.tab-bar__button--chips'),
        btnDindins: () => cy.get('button.tab-bar__button--greens'),
        btnPequenosPrecos: () => cy.get('button.tab-bar__button--combos'),
        lblUser: () => cy.get('[data-testid="user-info"]'),
        btnLogout: () => cy.get('[data-component-id="b1c51a30-c42d-48e8-a19c-1645a73a8fea"]'),
        btnColetar: () => cy.get('[data-testid="free-button"]'),
        mdlVoceRecebeu: () => cy.get('[data-testid="claimed-item-modal-image"]'),
        btnVoltar: () => cy.get('#free-item-modal'),
        btnColetado: () => cy.get('[data-testid="owned"]'),
        lblPequenosPrecos: () => cy.get('[data-testid="section-title"]').should('be.visible').and('contain.text', 'Pequenos preços!'),
        lblFichas: () => cy.get('[data-testid="section-title"]').should('be.visible').and('contain.text', 'Fichas'),
        lblDindins: () => cy.get('[data-testid="ui-site-media"]').should('be.visible')



    }

    acessarSite() {
        cy.visit('https://store.pipastudios.com/pt-BR')
    }

    acessarLogin() {
        this.elementos.btnAcessar().should('be.visible').click()
    }

    logOut() {
        this.elementos.btnLogout().should('be.visible').click()
    }

    validarColetaPresente() {

        this.elementos.btnColetar().should('be.visible').click()
        this.elementos.mdlVoceRecebeu().should('be.visible')
        this.elementos.btnVoltar().click()

    }

    validarBotaoFichas() {

        this.elementos.btnFichas().should('be.visible').click()
        this.elementos.lblFichas().should('be.visible')

    }

    validarBotaoDindins() {

        this.elementos.btnDindins().should('be.visible').click()
        this.elementos.lblDindins().should('be.visible')

    }

    validarBotaoPequenosPrecos(){

        this.elementos.btnPequenosPrecos().should('be.visible').click()
        this.elementos.lblPequenosPrecos().should('be.visible')

    }
}