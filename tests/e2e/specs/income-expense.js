module.exports = {
  'e2e test for income and expenses': function(browser) {
    browser
        .url('http://localhost:8080/')
        .waitForElementVisible('#accountNameInput', 2000)
        .pause(1000)

        .setValue('#accountNameInput', 'University')
        .pause(1000)

        .click('#addAccountButton')
        .pause(1000)

        .click('#University')
        .pause(2000)

        .click('#Income')
        .pause(1000)

        .setValue('#categoryRegister', 'Savings')
        .click('#buttonCategory')
        .pause(1000)

        .setValue('#name', 'Weekly money')
        .pause(1000)
        .click('#category option:nth-child(3)')
        .pause(1000)
        .setValue('#amount', '500')
        .pause(1000)
        .setValue('input[id="dateSpace"]', '21/05/2019')
        .pause(1000)
        .click('#buttonTransaction')
        .pause(1000)

        .click('#account-main-menu')
        .pause(2000)

        .click('#Expenses')
        .pause(1000)

        .setValue('#categoryRegister', 'Food')
        .pause(1000)
        .click('#buttonCategory')
        .pause(1000)

        .setValue('#name', 'Buy lunch')
        .pause(1000)
        .click('#category option:nth-child(3)')
        .pause(1000)
        .setValue('#amount', '-100')
        .pause(1000)
        .setValue('input[id="dateSpace"]', '22/05/2019')
        .pause(1000)
        .click('#buttonTransaction')
        .pause(1000)

        .clearValue('#amount')
        .pause(1000)
        .setValue('#amount', '100')
        .pause(1000)
        .click('#buttonTransaction')
        .pause(1000)

        .click('#account-main-menu')
        .pause(2000)

        .click('#Report')
        .pause(1000)

        .setValue('input[id="startDate"]', '21/02/2019')
        .pause(1000)
        .setValue('input[id="endDate"]', '22/05/2019')
        .pause(1000)
        .click('#showReport')
        .pause(2000)

        .assert.containsText('.table', '2019-05-21 500 Weekly money Savings')
        .assert.containsText('.table', '2019-05-22 -100 Buy lunch Food')
        .end()
  },
}
