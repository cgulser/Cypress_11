describe('Crystal Key Hotel', ()=>{

it('Test 1',()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    
    // 1. Yol
    cy.get('#navLogon > .nav-link').click()

    // 2. Yol
    //cy.contains('Log in').click()

    //contains() metni text olarak buluyor
    //username = 'manager'
    cy.get('#UserName').type('manager')
    //password = 'Manager1!'
    cy.get('#Password').type('Manager1!')

    cy.get('#btnSubmit').click()
   
    //ASSERT

    // 
    cy.url().should('include','/Admin/UserAdmin') 

})

})