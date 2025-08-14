export class Xsolla {

    elementos = {}

    validarOfertaBoasVindas() {
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('paystation4/payment/3607?token=urq5CDhoBl3p6H0oyiKX09GlefUMJlLD_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Oferta de boas-vindas"]').should('be.visible')
        }
        )
    }

    validarOfertaExclusiva(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5qhyTdC8mNP85QJCX7oBjTXJSE8h9_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Oferta Exclusiva"]').should('be.visible')
        }
        )
    }

    validarFichinhas(){
         cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5NcCIoeIY04RcjgJ7kRbHTSyd8yfe_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Fichinhas"]').should('be.visible')
        }
        )
    }

    validarDindinzinhos(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5smIgtq2Xa6tc8BuQ7S62ysLYN8q7_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Dindinzinhos"]').should('be.visible')
        }
        )  
    }

    validarCombinho(){
         cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5HJJkrMHKBAEaiEDm45gb7qtDc4Ji_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Combinho"]').should('be.visible')
        }
        )
    }

    validarFichas(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5k8v31wbdvRNeT6GMH5nglMfPk4Kh_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Fichas"]').should('be.visible')
        }
        )
    }

    validarMaisFichas(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5dfdMtyHrXZeH3p7nfUgA7v3DlPM8_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Mais fichas!"]').should('be.visible')
        }
        )
    }

    validarMonteDeFichas(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5MnRYnNzmAW5dptEgpauBGkxY3wou_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Monte de Fichas"]').should('be.visible')
        }
        )
    }

    validarDindins(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5jBY0JsI0mmsxsuZygChj7aWQez71_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Dindins"]').should('be.visible')
        }
        )
    }

    validarMaisDindins(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq50YEOjhsIXsKtxPLCnTLOdBVDoaoR_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Mais Dindins!"]').should('be.visible')
        }
        )
    }

    validarMuitosDindins(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('/paystation4/payment/3607?token=urq5K4j0h02JopsTGqcjCNJs0KEUX6Yk_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Muitos Dindins"]').should('be.visible')
        }
        )
    }
}
