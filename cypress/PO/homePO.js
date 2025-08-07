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
        btnAplicarDesconto: () => cy.get('div.xds-text-button-m').contains('APLICAR DESCONTO'),
        lblErroCupom: () => cy.get('span[data-source="server"]'),
        btnFechar: () => cy.get('[data-testid="pwa-close-icon"]')

    }

    acessarSite() {
        cy.visit('https://store.pipastudios.com/pt-BR')
    }


    aceitarCookiesSeExistirem() {
        cy.get('button').invoke('text').then($el => {
            if ($el.includes('Aceitar tudo')) {
                this.elementos.btnAceitarTudo().click()
            }
        })
    }

    fecharAdicionarTelaInicio() {
        cy.get('[data-testid="pwa-close-icon"] svg path')
            .invoke('attr', 'clip-rule')
            .then(clipRule => {
                if (clipRule && clipRule.includes('evenodd')) {
                    this.elementos.btnFechar().click();
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

    validarBotaoGooglePlay() {
        cy.get('a[data-button-type="google_play_button"]')
            .should('have.attr', 'href')
            .and('include', 'https://play.google.com/store/apps/details?id=air.com.pipastudios.release.praiabingo');

    }

    validarBotaoAppStore() {
        cy.get('a[data-button-type="apple_store_button"]')
            .should('have.attr', 'href')
            .and('include', 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=0CDcQw7AJahcKEwjY0tvU4rmBAxUAAAAAHQAAAAAQAw&url=https%3A%2F%2Fapps.apple.com%2Fbr%2Fapp%2Fpraia-bingo-jogo-de-bingo%2Fid722428252&psig=AOvVaw2UXy4TGfgLUFT55Kfol_c6&ust=1695319294775911&opi=89978449&_xm=212542.402170118508904462');
    }

    validarCookiesEssenciais() {
        this.elementos.btnCookiesEssenciais().should('be.visible').click()
    }

    validarListaCookiesEssenciais() {
        cy.get('a.gdpr-settings-content__link')
            .should('have.attr', 'href', 'https://xsolla.com/cookie#essentional');

    }

    validarCookiesAnaliticos() {
        this.elementos.btnCookiesAnaliticos().should('be.visible').click()
    }

    validarListaCookiesAnaliticos() {
        cy.get('a.gdpr-settings-content__link svelte-fj6qxk')
        .should('have.attr', 'href', 'https://xsolla.com/cookie#analytical')
    }

    validarCentralPrivacidade() {
        this.elementos.btnPrivacidade().click({ force: true })
        cy.get('h4.gdpr-settings-screen__title').should('be.visible')
    }

    validarErroCupom() {

        this.elementos.lblCupomDesconto().should('be.visible').type('11111111')
        this.elementos.btnAplicarDesconto().click()
        this.elementos.lblErroCupom().should('be.visible')

    }

}