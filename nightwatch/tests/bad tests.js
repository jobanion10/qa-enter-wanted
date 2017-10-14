const functions = require('../test_data/commonFunctions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    
    'if one optional fields is present, all required fields needed': browser => {
        let transaction = data.transactions.licOnly
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal(transaction.results.errorList)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },


    'if two optional fields are present, all required fields needed': browser => {
        let transaction = data.transactions.lisLiyOnly
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal(transaction.results.errorList)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },







    'I can put bad data in and get the right error message': browser => {
        let transaction = data.transactions.olnOnly
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        functions.messagesCheck(selectors.messages.errorList, transaction.results.errorList, browser)
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    }
}
