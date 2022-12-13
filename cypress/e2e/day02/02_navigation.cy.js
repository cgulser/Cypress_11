describe('Navigation', ()=>{
    it ('back, forward, refresh', ()=>{

        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()


        // onceki sayfaya git 
        //cy.go('back')

        //bir onceki sayfaya git 
        cy.go(-1)
        cy.wait(2000)

        cy.go('forward')
        cy.wait(2000)

        //bir ileri git
        cy.go(1)
        cy.wait(2000)

        //sayfayi tekrar yukle
        cy.reload()


    })
})