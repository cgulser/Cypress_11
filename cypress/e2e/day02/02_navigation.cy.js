describe('Navigation', ()=>{
    it.skip('back, forward, refresh', ()=>{
        //it.skip testi calistirmaz gormzden gelir seleniumdaki ignore gibi

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

    it('zincirleme navigation',()=>{

        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy
        .contains('Log in')
        .click()
        .go('back')
        .go('forward')
        .go(-1)

        cy
        .reload(true)
        .contains('Log in')
        .should('be.visible')
        

    })
})