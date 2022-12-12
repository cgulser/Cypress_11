describe('Crystal Key Hotel', ()=>{

    it('Tast Case 1',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()

//ASSERT
    // 1)
    cy.url().should('include','/Account/Logon') 

    // 2)
    cy.get('#navLogon > .nav-link').should('have.text','Log in')

    // 3)
    
    cy.get('.row > .mb-4').should('be.visible')

    // 4) 
    cy.url().should('eq','https://qa-environment.koalaresorthotels.com/Account/Logon')

    // 5)
    cy.title().should('eq','KoalaResortHotels - Log in')
    })

})