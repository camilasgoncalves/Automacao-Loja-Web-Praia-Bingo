import { Home } from "../PO/homePO";
import { Login } from "../PO/loginPO";

describe('Fluxos da Home', () => {

    const login = new Login()
    const home = new Home()

    it('Validar coleta de Presente', () => {
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.validarColetaPresente()
        home.elementos.lblUser().should('be.visible')
    })

    it('Validar presente já coletado', () => {
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.elementos.btnColetado().should('be.visible')
    })

    it('Validar botão "Fichas"', () =>{
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.validarBotaoFichas()
    })

    it('Validar botão "Dindins"', () =>{
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.validarBotaoDindins()
    })

    it('Validar botão "Pequenos Preços"', () =>{
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.validarBotaoPequenosPrecos()
    })

    it('Validar redirecionamento para Youtube', () =>{
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoYoutube()
    })

     it('Validar redirecionamento para Instagram', () =>{
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoInstagram()
    })

     it('Validar redirecionamento para Facebook', () =>{
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.validarBotaoFacebook()
    })

    it('Valida Cookies Essenciais e Lista em Central de Preferência de Privacidade', () =>{
        home.acessarSite()
       // home.aceitarCookiesSeExistirem()
        home.validarCentralPrivacidade()
        home.validarCookiesEssenciais()
        home.validarListaCookiesEssenciais()
    })
})

