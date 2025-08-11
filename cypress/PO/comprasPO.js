export class Compras{

elementos = {

    lblOfertaBoasVindas: () => cy.contains('div.title.text-word-break', 'Oferta de boas-vindas'),
}

validarOfertaBoasVindas(){
    this.elementos.lblOfertaBoasVindas().should('be.visible')
}

}