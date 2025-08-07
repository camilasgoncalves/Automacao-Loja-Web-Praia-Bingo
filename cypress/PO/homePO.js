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
        lblDindins: () => cy.get('[data-testid="ui-site-media"]').should('be.visible'),
        btnPrivacidade: () => cy.get('button[data-testid="privacy-settings"]'),
        btnInformacoesGerais: () => cy.contains('button', 'Informações gerais'),
        btnCookiesEssenciais: () => cy.contains('button', 'Cookies essenciais'),
        btnCookiesAnaliticos: () => cy.contains('button', 'Cookies analíticos e de desempenho'),
        btnCookiesFuncionais: () => cy.contains('button', 'Cookies funcionais'),
        btnCookiesPersonalizacao: () => cy.contains('button', 'Cookies de personalização'),
        btnAceitarTudo: () => cy.get('#accept-button'),
        lblCupomDesconto: () => cy.get('input[placeholder="Digite o código aqui"]'),
        btnAplicarDesconto: () => cy.get('div.xds-text-button-m').contains('APLICAR DESCONTO')

    }

    acessarSite() {
        cy.visit('https://store.pipastudios.com/pt-BR')
    }


    aceitarCookiesSeExistirem() {
            cy.get('body').invoke('text').then($el => {
                console.log('TEXTO: ' + $el)
                console.log('Chegouuuuu aqui 1')
                if ($el.includes('Aceitar tudo')) {
                    console.log('Chegouuuuu aqui 2')
                    this.elementos.btnAceitarTudo().click()
                }
            })
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

        validarBotaoPequenosPrecos() {

            this.elementos.btnPequenosPrecos().should('be.visible').click()
            this.elementos.lblPequenosPrecos().should('be.visible')

        }

        validarBotaoYoutube() {

            cy.get('a.inner-social-media-item')
                .should('have.attr', 'href', 'https://www.youtube.com/@praiabingobrasil')
                .and('have.attr', 'target', '_blank').and('have.attr', 'rel').should('include', 'noopener');
        }

        validarBotaoInstagram() {
            cy.get('a.inner-social-media-item[href="https://www.instagram.com/praiabingo/"]')
                .should('have.attr', 'target', '_blank')
                .and('have.attr', 'rel').should('include', 'noopener')

        }

        validarBotaoFacebook() {
            cy.get('a.inner-social-media-item[href="https://www.facebook.com/PraiaBingo"]')
                .should('have.attr', 'target', '_blank')
                .and('have.attr', 'rel').should('include', 'noopener')

        }

        validarCookiesEssenciais() {
            this.elementos.btnCookiesEssenciais().should('be.visible').click()
        }

        validarListaCookiesEssenciais() {
            cy.get('a.gdpr-settings-content__link')
                .should('have.attr', 'href', 'https://xsolla.com/cookie#essentional')
                .and('have.attr', 'target', '_blank')
                .and('have.attr', 'rel', 'noopener noreferrer')
        }

        validarCookiesAnaliticos() {
            this.elementos.btnCookiesAnaliticos().should('be.visible').click()
        }

        validarListaCookiesAnaliticos() {
            cy.get('a[href="https://xsolla.com/cookie#analytical"]')
                .should('have.attr', 'target', '_blank')
                .and('have.class', 'gdpr-settings-content__link')
        }

        validarCentralPrivacidade() {
            this.elementos.btnPrivacidade().click({ force: true })
            cy.wait(500)
            cy.get('h4.gdpr-settings-screen__title').should('be.visible')
        }

    }