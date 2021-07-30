export default class loginPo {
    openLoginPage () {
        browser.url('http://the-internet.herokuapp.com/login')
}
    get username () { return $('#username')}
    get password () { return $('#password')}
    get loginButton () { return $('from button[type="submit"]')}
    get message () { return $('#flash')}
}
