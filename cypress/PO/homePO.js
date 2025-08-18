export class Home {

    elementos = {

        btnAcessar: () => cy.contains('div.auth-button__login-text', 'Acessar'),
        btnLanguage: () => cy.get('select.locale-select.locale-select--compact'),
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
        btnFechar: () => cy.get('[data-testid="pwa-close-icon"]'),
        btnFecharCentral: () => cy.get('#close-button'),
        btnRejeitarTudo: () => cy.get('#reject-button'),
        btnConfirmarSelecao: () => cy.get('#confirm-button'),
        btnPergunta1: () => cy.contains('div[data-testid="editor-text"]', 'Posso usar os itens que compro na Loja Web no jogo Praia Bingo?'),
        btnPergunta2: () => cy.contains('div[data-testid="editor-text"]', 'Quanto tempo demora para liberar no Praia Bingo os itens que comprei aqui na loja? '),
        btnPergunta3: () => cy.get('[data-testid="faq-card-c1f283aa-d831-4d6f-b96d-e0ae7fda551c"]').contains('Só posso comprar se informar meu ID?'),
        btnPergunta4: () => cy.get('[data-testid="faq-card-8c5430ba-2494-4c69-ac98-c4eb57a4c662"]').contains('Onde encontro meu ID Praia Bingo?'),
        btnPergunta5: () => cy.get('[data-testid="faq-card-b783347c-c239-4f36-9436-ba2be763965b"]').contains('Meu ID não está funcionando.'),
        btnPergunta6: () => cy.get('[data-testid="faq-card-2fbd0ac4-1967-499b-856d-b53cab058c3f"]').contains('Quais são os métodos de pagamento suportados na loja?'),
        btnPergunta7: () => cy.get('[data-testid="faq-card-c4e5ae77-c8b0-4f2b-a58a-f02350100227"]').contains('Como adicionar e salvar um método de pagamento?'),
        btnPergunta8: () => cy.get('[data-testid="faq-card-239b43e2-dbb1-42f0-8d2e-10759288fb69"]').contains('Não consigo concluir a compra porque aparece “as informações do cartão de crédito/débito não são válidas".'),
        btnPergunta9: () => cy.get('[data-testid="faq-card-280a6c3b-e1c8-4471-bc44-79fe99b27646"]').contains('Não vejo meu produto comprado no jogo.'),
        btnPergunta10: () => cy.get('[data-testid="faq-card-6a5ecef1-3d2e-4ab0-ac2f-68b67d7872f7"]').contains('Comprei itens para a conta de jogo errada.'),
        btnPergunta11: () => cy.get('[data-testid="faq-card-ccc308b5-5e75-4532-8547-ac11749001d3"]').contains('Recebi menos itens no jogo do que comprei no site. '),
        btnOfertaBoasVindas: () => cy.get('#store-buy-button-6759f96d11aa1b73fce3b5db-0-payment_web_cash_1000'),
        btnOfertaExclusiva: () => cy.get('#store-buy-button-6759f96d11aa1b73fce3b5db-2-payment_web_specialoffer_bundle_2200_30'),
        btnOfertaEspecial: () => cy.get('#store-buy-button-6759f96d11aa1b73fce3b5db-2-payment_web_specialoffer_bundle_1000_10'),
        btnFichinhas: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-0-payment_web_bundle_coins_400'),
        btnDindinzinhos: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-0-payment_web_bundle_cash_20'),
        btnCombinho: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-0-payment_web_bundle_combo_10_200'),
        btnOfertaFichas: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-1-payment_web_bundle_coins_1100'),
        btnMaisFichas: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-1-payment_web_bundle_coins_2200'),
        btnMonteDeFichas: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-1-payment_web_bundle_coins_4400'),
        btnOfertaDindins: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-2-payment_web_bundle_cash_55'),
        btnMaisDindins: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-2-payment_web_bundle_cash_110'),
        btnMuitosDindins: () => cy.get('#store-buy-button-675c746a404da3b7d241d469-2-payment_web_bundle_cash_220'),
        btnXsollaPay: () => cy.get('[data-testid="xsolla-pay-button"]'),
        lblName: () => cy.get('#x-text-control-input-user_name')



    }

    acessarSite() {
        cy.visit('https://store.pipastudios.com/pt-BR')
    }


    aceitarCookiesSeExistirem() {
            cy.get('button').invoke('text').then($el => {
                if ($el.includes('Aceitar tudo')) {
                    this.elementos.btnAceitarTudo().click({force: true})
                }
            })
        }

    /*aceitarCookiesSeExistirem() {
            cy.get('.gdpr-buttons svelte-1ux32dr').invoke('text').then($el => {
                if ($el.includes('Aceitar tudo')) {
                    this.elementos.btnAceitarTudo().click({force: true})
                }
            })
        }*/


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
        cy.get('.gdpr-settings-content__link')
            .should('have.attr', 'href', 'https://xsolla.com/cookie#analytical');

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

    validarCookiesFuncionais() {
        this.elementos.btnCookiesFuncionais().should('be.visible').click()
    }

    validarListaCookiesFuncionais() {
        cy.get('a.gdpr-settings-content__link')
            .should('have.attr', 'href', 'https://xsolla.com/cookie?_xm=212542.402170118508904462#functional')

    }

    validarCookiesPersonalizacao() {
        this.elementos.btnCookiesPersonalizacao().should('be.visible').click()
    }

    validarListaCookiesPersonalizacao() {
        cy.get('a.gdpr-settings-content__link')
            .should('have.attr', 'href', 'https://xsolla.com/cookie#targeting')
    }

    validarPoliticaCookies() {
        cy.contains('a.gdpr-settings-footer__link').should('have.attr', 'href', 'https://xsolla.com/cookie?_xm=212542.402170118508904462')

    }

    validarPoliticaPrivacidade() {
        cy.contains('a.gdpr-settings-footer__link').should('have.attr', 'href', 'https://xsolla.com/privacypolicy?_xm=212542.402170118508904462')
    }

    validarFecharCentral() {
        this.elementos.btnFecharCentral().should('be.visible').click()
        cy.get('[data-testid="copyright"]').should('be.visible')
    }

    validarRejeitarTudo() {
        this.elementos.btnRejeitarTudo().should('be.visible').click()
        cy.get('[data-testid="copyright"]').should('be.visible')
    }

    validarAceitarTudo() {
        this.elementos.btnConfirmarSelecao().should('be.visible').click()
        cy.get('[data-testid="copyright"]').should('be.visible')
    }

    validarProgramaAfiliados() {
        cy.contains('a.affiliate-program-button').should('have.attr', 'href', 'https://influencer.xsolla.com/?utm_source=sitebuilder&utm_medium=footer_affiliate_link&utm_campaign=394398&utm_content=223867&utm_term=212542&_xm=212542.402170118508904462')
    }

    validarJogueAgora() {
        cy.contains('a.ui-site-calltoaction').should('have.attr', 'href', 'https://pipastudios.com/deeplinks/classic/?goto=ibiza&_xm=212542.402170118508904462')
    }

    validarPerguntar(pergunta) {
        switch (pergunta) {
            case 'Posso usar os itens que compro na Loja Web no jogo Praia Bingo?':
                this.elementos.btnPergunta1().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Sim, e apenas no Praia Bingo! Este site serve apenas como uma loja virtual, não sendo possível jogar o Praia Bingo por aqui.')
                break
            case 'Quanto tempo demora para liberar no Praia Bingo os itens que comprei aqui na loja?':
                this.elementos.btnPergunta2().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Em até 3 minutos depois de ter efetuado a compra, os itens estarão no aplicativo no Praia Bingo em seu celular ou tablet, disponíveis para você curtir. ')
                break
            case 'Só posso comprar se informar meu ID?':
                this.elementos.btnPergunta3().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Sim, seu ID (número de identificação) é o que vai direcionar a compra para seu usuário no jogo.')
                break
            case 'Onde encontro meu ID Praia Bingo?':
                this.elementos.btnPergunta4().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Em seu aplicativo do Praia Bingo, siga as seguintes instruções para encontrar seu ID (número de identificação):')
                break
            case 'Meu ID não está funcionando.':
                this.elementos.btnPergunta5().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Se você já verificou que o ID está correto e tentou algumas vezes acessar o site (esperando alguns minutos entre cada tentativa) e ainda assim não obteve sucesso, entre em contato com nosso')
                break
            case 'Quais são os métodos de pagamento suportados na loja? ':
                this.elementos.btnPergunta6().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Você pode efetuar suas compras com cartões de crédito e débito e Pix. Não aceitamos pagamentos via boleto até o momento.')
                break
            case 'Como adicionar e salvar um método de pagamento? ':
                this.elementos.btnPergunta7().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Selecione os itens que deseja comprar e envie para o carrinho de compra:')
                break
            case 'Não consigo concluir a compra porque aparece “as informações do cartão de crédito/débito não são válidas".':
                this.elementos.btnPergunta8().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Certifique-se de ter inserido as informações corretas e tente novamente. Caso precise de ajuda, entre em contato com o nosso ')
                break
            case 'Não vejo meu produto comprado no jogo.':
                this.elementos.btnPergunta9().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Certifique-se de estar conectado ao jogo com o mesmo ID Praia Bingo usado para fazer a compra. Se a compra ainda não estiver visível, entre em contato com o nosso ')
                break
            case 'Comprei itens para a conta de jogo errada. ':
                this.elementos.btnPergunta10().should('be.visible').click()
                cy.get('[data-testid="editor-text"]').contains('Entre em contato com o ').and(' para solucionar esse problema. ')
                break
            case 'Recebi menos itens no jogo do que comprei no site. ':
                this.elementos.btnPergunta11().should('be.visible').click()
                cy.get('div[data-testid="editor-text"].xds-text.xds-text-paragraph.faq-card__text.faq-card__answer-text.faq-card__answer-text--opened a').should('have.attr', 'href', 'mailto:suporte@pipastudios.com').and('contain', 'time de atendimento');
        }
    }

    validarIdiomas(idioma) {
        switch (idioma) {
            case 'English':
                cy.get('select.locale-select.locale-select--compact').select('English')
                cy.get('div[data-testid="section-title"]').contains('BIG OFFERS')
                break
            case 'Espanõl':
                cy.get('select.locale-select.locale-select--compact').select('Español')
                cy.get('div[data-testid="section-title"]').contains('Ofertas Especiales')
                break
            case 'Italiano':
                cy.get('select.locale-select.locale-select--compact').select('Italiano')
                cy.get('div[data-testid="section-title"]').contains('Grandi Offerte')
                break
        }
    }

    validarBannerBoasVindas() {
        this.elementos.btnOfertaBoasVindas().should('be.visible').click()
    }

    validarOfertaEspecial() {
        this.elementos.btnOfertaEspecial().should('be.visible').click()
    }

    validarOfertaExclusiva() {
        this.elementos.btnOfertaExclusiva().should('be.visible').click()
    }

    validarCompraFichinhas() {
        this.elementos.btnFichinhas().should('be.visible').click()
    }

    validarComprarDindinzinhos() {
        this.elementos.btnDindinzinhos().should('be.visible').click()
    }

    validarComprarCombinho() {
        this.elementos.btnCombinho().should('be.visible').click()
    }

    validarComprarFichas() {
        this.elementos.btnOfertaFichas().should('be.visible').click()
    }

    validarComprarMaisFichas() {
        this.elementos.btnMaisFichas().should('be.visible').click()
    }

    validarComprarMonteDeFichas() {
        this.elementos.btnMonteDeFichas().should('be.visible').click()
    }

    validarComprarDindins() {
        this.elementos.btnOfertaDindins().should('be.visible').click()
    }

    validarComprarMuitosDindins() {
        this.elementos.btnMuitosDindins().should('be.visible').click()
    }

    validarComprarMaisDindins() {
        this.elementos.btnMaisDindins().should('be.visible').click()
    }
}