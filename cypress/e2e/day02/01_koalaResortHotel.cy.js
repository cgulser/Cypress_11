describe('Koala Resort Hotel', ()=>{

    it('Tast Case 1',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()

//ASSERT
    // 1)
    cy.url().should('include','/Account/Logon') 

    // 2) have.text
    cy.get('#navLogon > .nav-link').should('have.text','Log in')

    // 3) be.visible   **
    cy.get('.row > .mb-4').should('be.visible')

    // 4) should('eq',''
    cy.url().should('eq','https://qa-environment.koalaresorthotels.com/Account/Logon')

    //  should('eq',''     ** title buna esit mi?
    cy.title().should('eq','KoalaResortHotels - Log in')

    // 5) should('include.text', ''
    cy.get('.row > .mb-4').should('include.text','Log in')



    })

})