export class Login{

    elementos= {
        
        lblId: () => cy.get('#user-id-input'),
        btnAcessar: () => cy.contains('span.user-id-modal__button-text', 'Acessar'),
        lblErroLogin: () => cy.contains('[data-testid="editor-text"]', 'Não consegue encontrar seu Praia ID?'),
        lblInfo: () => cy.get('[data-testid="open-image"]')
    }

    realizarLogin(){
        
        this.elementos.lblId().should('be.visible').type('XOAP1893')
        this.elementos.btnAcessar().click()
    }

    realizarLoginInvalido(){

        this.elementos.lblId().should('be.visible').type('2222222')
        this.elementos.btnAcessar().click()
    }

    naoEncontraID(){
     this.elementos.lblErroLogin().should('be.visible').click;
    }
}