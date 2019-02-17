import BasePage from './BasePage';
import ILoginPage from '../interfaces/ILoginPage';

const loginSelectors = require('../selectors/login.json');

export default class LoginPage extends BasePage implements ILoginPage {
    constructor() {
        super();
    }

    get username() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.$(loginSelectors.usernameLocator);
    }

    get password() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.$(loginSelectors.passwordLocator);
    }

    get loginButton() : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>> {
        return browser.$(loginSelectors.loginButtonLocator);
    }

    clickSubmitButton() : void {
        try {
            this.loginButton.click();
        } catch (err) {
            browser.execute(() => {
                const button: any = document.getElementsByClassName('radius')[0];
                button.click();
            });
        }
    }
}
