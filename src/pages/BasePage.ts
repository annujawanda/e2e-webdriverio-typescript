const locators = require('../selectors/basePage.json');

export default class BasePage {

    public getPageHeader() : string {
        const h2Selector: string = 'div.application-main h1';

        if (browser.$$(locators.h2Selector).length > 0) {
            return $(h2Selector).getText();
        }
        return browser.$(h2Selector).getText();
    }

}
