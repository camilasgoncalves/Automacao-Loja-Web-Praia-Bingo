export class Compras {

    elementos = {

        lblOfertaBoasVindas: () => cy.contains('div.title.text-word-break', 'Oferta de boas-vindas'),
    }

    validarOfertaBoasVindas() {
        this.elementos.lblOfertaBoasVindas().should('be.visible')
        cy.frameLoaded('#meuIframe')
        cy.iframe('#meuIframe')
            .find('button#confirmar')
            .should('be.visible')
            .click();

    }

}