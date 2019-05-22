// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Demo test Google': function(browser) {
    browser
        .url('http://localhost:8080/')
        .waitForElementVisible('.container', 2000)
        .pause(1000)

        .setValue('#accountNameInput', 'Ana')
        .pause(1000)

        .click('#addAccountButton')
        .pause(1000)

        .waitForElementVisible('#Ana', 1000)
        .click('#Ana')
        .pause(1000)

        .waitForElementVisible('.container', 3000)
        .click('#Income')
        .pause(2000)
        /* setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('input[name=btnK]', 2000)
        .click('input[name=btnK]')
        .pause(3000)
        .assert.containsText('#main', 'Nightwatch.js')*/
        .end()
  },
}
