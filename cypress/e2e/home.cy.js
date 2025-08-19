import { Home } from "../PO/homePO";
import { Login } from "../PO/loginPO";

describe('Fluxos da Home', () => {

    const login = new Login()
    const home = new Home()

    it('Validar coleta de Presente', () => {
        home.acessarSite()
        // home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.validarColetaPresente()
        home.elementos.lblUser().should('be.visible')
    })

    it('Validar presente já coletado', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.elementos.btnColetado().should('be.visible')
    })

    it('Validar botão "Fichas"', () => {
        home.acessarSite()
        // home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarBotaoFichas()
    })

    it('Validar botão "Dindins"', () => {
        home.acessarSite()
        // home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarBotaoDindins()
    })

    it('Validar botão "Pequenos Preços"', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarBotaoPequenosPrecos()
    })

    it('Validar redirecionamento para Youtube', () => {
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoYoutube()
    })

    it('Validar redirecionamento para Instagram', () => {
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoInstagram()
    })

    it('Validar redirecionamento para Facebook', () => {
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoFacebook()
    })

    it('Validar redirecionamento para Google Play', () => {
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoGooglePlay()
    })

    it('Validar redirecionamento para App Store', () => {
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoAppStore
    })

    it('Erro ao inserir Cupom de Desconto', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarErroCupom()
    })

    it('Valida Cookies Essenciais e Lista em Central de Preferência de Privacidade', () => {
        home.acessarSite()
        // home.aceitarCookiesSeExistirem()
        home.log()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarCookiesEssenciais()
        home.validarListaCookiesEssenciais()

    })

    it('Valida Cookies Analíticos e Lista em Central de Preferência de Privacidade', () => {
        home.acessarSite()
        // home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarCookiesAnaliticos()
        home.validarListaCookiesAnaliticos()

    })

    it('Valida Cookies Funcionais e Lista em Central de Preferência de Privacidade', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarListaCookiesFuncionais()
        home.validarListaCookiesFuncionais()

    })

    it('Valida Cookies de Personalização e Lista em Central de Preferência de Privacidade', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarCookiesPersonalizacao()
        home.validarListaCookiesPersonalizacao()

    })

    it('Valida Política de Cookies em Central de Preferência e Privacidade', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarPoliticaCookies()
    })

    it('Valida Política de Privacidade em Central de Preferência e Privacidade', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarPoliticaPrivacidade
    })

    it('Valida botão Fechar em Central de Preferência e Privacidade', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarFecharCentral()

    })

    it('Valida botão Aceitar Tudo em Central de Preferência e Privacidade', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarAceitarTudo()

    })

    it('Valida botão Rejeitar Tudo em Central de Preferência e Privacidade', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarCentralPrivacidade()
        home.validarRejeitarTudo()

    })

    it('Valida perguntas em Precisa de Ajuda?', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarPerguntar('Posso usar os itens que compro na Loja Web no jogo Praia Bingo?')
        home.validarPerguntar('Quanto tempo demora para liberar no Praia Bingo os itens que comprei aqui na loja?')
        home.validarPerguntar('Só posso comprar se informar meu ID?')
        home.validarPerguntar('Onde encontro meu ID Praia Bingo?')
        home.validarPerguntar('Meu ID não está funcionando.')
        home.validarPerguntar('Quais são os métodos de pagamento suportados na loja? ')
        home.validarPerguntar('Como adicionar e salvar um método de pagamento? ')
        home.validarPerguntar('Não consigo concluir a compra porque aparece “as informações do cartão de crédito/débito não são válidas". ')
        home.validarPerguntar('Não vejo meu produto comprado no jogo. ')
        home.validarPerguntar('Comprei itens para a conta de jogo errada.')
        home.validarPerguntar('Recebi menos itens no jogo do que comprei no site. ')
    })

    it('Valida Idiomas', () => {
        home.acessarSite()
        //home.aceitarCookiesSeExistirem()
        home.dispensarCookiesSeExistirem()
        home.fecharAdicionarTelaInicio()
        home.validarIdiomas('English')
        home.validarIdiomas('Espanõl')
        home.validarIdiomas('Italiano')
    })

})
