import LoginPage from './LoginPage';

const presenceLocators = require('../selectors/screenPresenceLocators.json');

export default class NavigationMenu {

    public loadNavigationMenu() : void {
        browser.url('/');
    }

    public loadFormAuthenticationPage() : LoginPage {
        browser.url('/login');
        browser.waitForVisible(presenceLocators.login);
        return new LoginPage();
    }
}
