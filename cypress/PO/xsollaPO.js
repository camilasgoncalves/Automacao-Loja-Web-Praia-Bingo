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
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5uuJQrrvPLkMAjhrSYeBJ3e4VPd4S_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Fichinhas"]').should('be.visible')
        }
        )
    }

    validarDindinzinhos(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5QvjwBEiRvZPTLLSYvjc3udpUlxFf_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Dindinzinhos"]').should('be.visible')
        }
        )  
    }

    validarCombinho(){
         cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5C8PC4sIBmllgundKBE664llSutO7_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Combinho"]').should('be.visible')
        }
        )
    }

    validarFichas(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5fIDAQL3oKPXoU0ezoficE0FwArJ8_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Fichas"]').should('be.visible')
        }
        )
    }

    validarMaisFichas(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5mh4XLpAfB1xWVsucgAhLVxzBvM9e_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Mais fichas!"]').should('be.visible')
        }
        )
    }

    validarMonteDeFichas(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq58NaeMWYazoKm8vVrCBWbtAfSo0g1_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Monte de Fichas"]').should('be.visible')
        }
        )
    }

    validarDindins(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5CwVcz8FxwpmXYWG7oggljgIZc9lL_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Dindins"]').should('be.visible')
        }
        )
    }

    validarMaisDindins(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5XSqZUfErj9EzCTQCiPKLHse2sSzx_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Mais Dindins!"]').should('be.visible')
        }
        )
    }

    validarMuitosDindins(){
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('https://secure.xsolla.com/paystation/?access_token=urq5N0JhMk3KIn076y6AmPZdHJBG1kWx_lc_pt_bg_FFFFFF_tb_29BD39&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Muitos Dindins"]').should('be.visible')
        }
        )
    }
}
