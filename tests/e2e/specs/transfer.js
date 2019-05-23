// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
        .url('http://localhost:8080/')
        .waitForElementVisible('body', 2000)

        .setValue('input[id="accountNameInput"]', 'Savings')
        .pause(1000)
        .click('button[id="addAccountButton"]')

        .setValue('input[id="accountNameInput"]', 'Second account')
        .pause(1000)
        .click('button[id="addAccountButton"]')
        .pause(1000)

        .click('button[id="Savings"]')
        .pause(1000)

        .click('#Income')
        .setValue('input[id="name"]', 'My income')
        .setValue('#category', 'Salary')
        .pause(1000)
        .setValue('input[id="amount"]', '500')
        .setValue('input[id="dateSpace"]', '05/05/1999')
        .pause(1000)
        .click('#buttonTransaction')
        .pause(1000)

        .click('#account-main-menu')
        .pause(1000)

        .click('#Transfer')
        .pause(1000)
        .setValue('#destinationAccount', 'Second account')
        .setValue('#amount', '200')
        .pause(1000)
        .click('#btn-transfer')
        .pause(1000)

        .click('#exit')
        .pause(1000)

        .click('button[id="Second account"]')
        .pause(1000)

        .click('#Report')
        .pause(1000)

        .setValue('#reportType', 'By category')
        .pause(1000)

        .click('#showReport')
        .pause(1000)

        .assert.containsText('.table', 'Transfer from Savings')
        .assert.containsText('.table', '200')
        .end()
  },
}
/* .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'testeandosoftware')
        .waitForElementVisible('input[name=btnK]', 10000)
        .click('input[name=btnK]')
        .pause(3000)
        .assert.containsText('#main', 'testeandosoftware.com')
        .end()*/
