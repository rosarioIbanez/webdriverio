const loginPo = require('./loginPo.js')

describe('Login Suite', () => {
    it('Login Valid Case', () => {
        loginPo.openLoginPage();
        expect(browser).toHaveUrlContaining('the-internet');
        loginPo.username().setValue('tomsmith');
        loginPo.password().setValue('SuperSecretPassword!')
        loginPo.loginButton().click()
        expect(loginPo.message()).toHaveTextContaining('You logged into a secure area!')
    })
})