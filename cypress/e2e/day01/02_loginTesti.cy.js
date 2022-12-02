describe('Crystal Key Hotel', ()=>{

it('Test 1',()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    
    // 1. Yol
    cy.get('#navLogon > .nav-link').click()

    // 2. Yol
    //cy.contains('Log in').click()
})

})