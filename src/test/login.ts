import { assert } from 'chai';
import NavigationMenu from '../pages/NavigationMenu';

const pageProperties = require('../config/messages.json');
const usernameErrorMessage = 'Incorrect username or password.';

describe('Login functionality test suite', () => {
    let loginPage;
    before('setup', () => {
        const navMenu: NavigationMenu = new NavigationMenu();
        navMenu.loadNavigationMenu();
        loginPage = navMenu.loadFormAuthenticationPage();
    });

    it('Login Test', () => {
        const msg = pageProperties.loginHeader;
        console.log(msg);
        loginPage.getPageHeader().should.be.equal(msg);

       // enter incorrect username
        loginPage.username.setValue('test@test');
        loginPage.clickSubmitButton();

    });
});
