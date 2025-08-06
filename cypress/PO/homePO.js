export class Home{

    elementos = {

            btnAcessar: () => cy.contains('div.auth-button__login-text', 'Acessar'),
            btnLanguage: () => cy.get('select.locale-select'),
            btnFichas: () => cy.get('button.tab-bar__button.tab-bar__button--chips'),
            btnDindins: () => cy.get('tab-bar__button tab-bar__button--greens'),
            btnPequenosPrecos: () => cy.get('tab-bar__button tab-bar__button--combos'),
            lblUser: () => cy.get('[data-testid="user-info"]'), 
            btnLogout: () => cy.get('[data-component-id="b1c51a30-c42d-48e8-a19c-1645a73a8fea"]')
    }

    acessarSite(){
        cy.visit('https://store.pipastudios.com/pt-BR')
    }

    acessarLogin(){
        this.elementos.btnAcessar().should('be.visible').click()
    }

    logOut(){
        this.elementos.btnLogout().should('be.visible').click()
    }
}