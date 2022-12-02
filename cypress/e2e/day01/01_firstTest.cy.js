//describe ('isim', test icin olusturulacak fonksiyon ve arrow isareti)

describe('Test1',()=>{

    //testi tanimliyoruz Seleniumdaki @Test gibi
    //it('URL Testi ', ()=>)
    it('Tst',()=> {

        //URL adresinde amazon var mi?
        cy.visit('https://www.amazon.com/')
        //visit siteye gider

        cy.url().should('include', 'amazon')
        // url() url testi icin kullanilir 
        // should('iceriyormu', 'abcdef') 
    })

    // 2. Test

    it('Title Test',()=>{
        // Title da 'Google' var mi?
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')

    })
})
