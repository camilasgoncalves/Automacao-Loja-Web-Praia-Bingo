import { Xsolla } from "../PO/xsollaPO";
import { Login } from "../PO/loginPO";
import { Home } from "../PO/homePO";

describe('Validaçõe do iframe do Xsolla', () =>{

const xsolla = new Xsolla()
const login = new Login()
const home = new Home()

it.only('Validar Oferta de Boas Vindas', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarBannerBoasVindas()
        xsolla.validarOfertaBoasVindas()

})

})