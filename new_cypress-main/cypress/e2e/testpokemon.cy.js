describe('Проверка авторизации', function () {

    it('проверка логина и пароля', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(":nth-child(1) > .auth__input").type('USER_LOGIN');
         cy.get("#password").type('USER_PASSWORD');
         cy.get(".auth__button").click();
         cy.wait(2000);
         cy.get(".header__container > .header__id").click({ force: true });
         cy.get('[href="/shop"]').click();
         cy.get(":nth-child(3) > .shop__button").click({ force: true });
         cy.get(".pay__payform-v2 > :nth-child(2) > .pay_base-input-v2").type('4620869113632996');
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1225');                           
         cy.get('.k_input_name').type('NAME');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');   
      });
 })