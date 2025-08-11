import { Home } from "../PO/homePO";
import { Login } from "../PO/loginPO";
import { Compras } from "../PO/comprasPO";

describe('Fluxos de Compras', () => {

    const login = new Login()
    const home = new Home()
    const compras = new Compras()


    it('Valida Oferta de Boas-Vindas', () =>{
        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarBannerBoasVindas()
        compras.validarOfertaBoasVindas()
    })
})