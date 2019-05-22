// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
        .url('http://localhost:8080/')
        .waitForElementVisible('body', 2000, 'Be sure that the page is loaded')
        .setValue('input[id="accountNameInput"]', 'Savings')
        .pause(1000)
        .click('button[id="addAccountButton"]')
        .setValue('input[id="accountNameInput"]', 'Second account')
        .pause(1000)
        .click('button[id="addAccountButton"]')
        .pause(1000)
        .click('button[id="Savings"]')
        .waitForElementVisible('body', 2000, 'Be sure that the page is loaded')
        .pause(1000)
        .click('#Income')

        .pause(10000)
        .end()


    /* .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'testeandosoftware')
        .waitForElementVisible('input[name=btnK]', 10000)
        .click('input[name=btnK]')
        .pause(3000)
        .assert.containsText('#main', 'testeandosoftware.com')
        .end()*/
  },
}
