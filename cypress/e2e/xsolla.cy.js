import { Xsolla } from "../PO/xsollaPO";
import { Login } from "../PO/loginPO";
import { Home } from "../PO/homePO";

describe('Validaçõe do iframe do Xsolla', () =>{

const xsolla = new Xsolla()
const login = new Login()
const home = new Home()

it('Validar Oferta de Boas Vindas', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarBannerBoasVindas()
        xsolla.validarOfertaBoasVindas()

})

it('Validar Oferta Especial', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarOfertaEspecial()
        xsolla.validarOfertaExclusiva()
})

it('Validar item Fichinhas em Pequenos Preços!', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarCompraFichinhas()
        xsolla.validarFichinhas()
        
})

it('Validar item Dindinzinhos em Pequenos Preços!', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarDindinzinhos()
        xsolla.validarDindinzinhos()
})

it('Validar item Combinho em Pequenos Preços!', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarCombinho()
        xsolla.validarCombinho()
        
})

it('Validar item Fichas em Fichas', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarFichas()
        xsolla.validarFichas()
        
})

it('Validar item Mais Fichas em Fichas', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarMaisFichas()
        xsolla.validarMaisFichas()
        
})

it('Validar item Mais Fichas em Fichas', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarMonteDeFichas()
        xsolla.validarMonteDeFichas()
        
})

it('Validar item Dindins em Dindins', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarDindins()
        xsolla.validarDindins()
        
})

it('Validar item Mais Dindins! em Dindins', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarMaisDindins()
        xsolla.validarMaisDindins()
        
})

it('Validar item Muitos Dindins em Dindins', () =>{

        home.acessarSite()
        home.aceitarCookiesSeExistirem()
        home.acessarLogin()
        login.realizarLogin()
        home.fecharAdicionarTelaInicio()
        home.validarComprarMuitosDindins()
        xsolla.validarMuitosDindins()
        
})

})