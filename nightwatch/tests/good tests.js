
const functions = require('../test_data/commonFunctions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')



module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },'I can put in the minimum amount of data, with the minimum amount of characters and generate a result': browser => {
        let transaction = data.transactions.minimumEntry
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },

    'I can put in the minimum amount of characters, with three optional fields and generate a result': browser => {
        let transaction = data.transactions.minimumEntryOlFields
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },

    'I can put a medium amount of characters, with three optional fields and generate a result': browser => {
        let transaction = data.transactions.mediumEntry
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(500)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    },






    // Bug found, DL Expiration wants date instead of year
    // 'I can put in the acceptable data in fields and only one set of optional data' : browser => {
    //     let transaction = data.transactions.maximumEntryDlOptionalFields
    //     functions.inputSet(selectors.fields, transaction.fields, browser)
    //     browser
    //         //submit
    //         .click(selectors.buttons.submit)
    //         .pause(100)
    //         //expect header to be right
    //         .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)

    //         //expect error list to be empty
    //     browser.expect.element(selectors.messages.errorList).text.to.equal('')
    //         //expect query title to be right
    //     browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
    //         //expect assembled query to be right
    //     browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)    
    // },


    // //WOO-HOO
    'I can put in the acceptable data, using maximum characters allowed in fields and only one set of optional data': browser => {
        let transaction = data.transactions.maximumEntryDlOptionalFields
        functions.inputSet(selectors.fields, transaction.fields, browser)
        browser
            .click(selectors.buttons.submit)
            .pause(100)
            .expect.element(selectors.messages.header).text.to.equal(transaction.results.header)
        browser.expect.element(selectors.messages.errorList).text.to.equal('')
        browser.expect.element(selectors.messages.queryTitle).text.to.equal(transaction.results.queryTitle)
        browser.expect.element(selectors.messages.assembledQuery).text.to.equal(transaction.results.assembledQuery)
    }
}
