describe('dropdown',()=>{

    it ('dropdown Test', ()=>{

        cy.visit('https://the-internet.herokuapp.com/dropdown')
        
        cy.get('#dropdown').select('Option 1').should('have.value','1')
        cy.get('#dropdown').select('Option 2')


    })

})