export class Xsolla {

    elementos = {}

    validarOfertaBoasVindas() {
        cy.origin('https://secure.xsolla.com', () => {
            cy.visit('paystation4/payment/3607?token=urq5CDhoBl3p6H0oyiKX09GlefUMJlLD_lc_pt_bg_2C2640_tb_6E7BF7&consentId=c3501cd4-5015-4cb5-af59-f07b4a408748&parent_domain=store.pipastudios.com')
            cy.get('img[alt="Oferta de boas-vindas"]')
        }
        )
    }
}
