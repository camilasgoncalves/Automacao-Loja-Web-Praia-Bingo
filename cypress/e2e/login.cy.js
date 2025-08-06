import { Login } from "../PO/loginPO";
import { Home } from "../PO/homePO";

describe('Fluxo de Login', () => {

    const home = new Home()
    const login = new Login()

    it('Realiza login com sucesso', () => {
        home.acessarSite()
        home.acessarLogin()
        login.realizarLogin()

        home.elementos.lblUser().should('be.visible')
        cy.log('Login realizado com sucesso')
    })

    it('Realiza login com erro', () => {
        home.acessarSite()
        home.acessarLogin()
        login.realizarLoginInvalido()

        login.elementos.lblErroLogin().should('be.visible')
        cy.log('Login não realizado')
    })

    it('Não consegue encontrar o ID', () => {
        home.acessarSite()
        home.acessarLogin()
        login.naoEncontraID()

    })

    it('Realiza logout com sucesso', () => {
        home.acessarSite()
        home.acessarLogin()
        login.realizarLogin()
        home.elementos.lblUser().should('be.visible').click()
        home.logOut()
        home.elementos.btnAcessar().should('be.visible')

    })

})