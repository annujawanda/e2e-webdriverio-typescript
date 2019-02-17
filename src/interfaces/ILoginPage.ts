export default interface ILoginPage {
    username : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
    password : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
    loginButton : WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;
    clickSubmitButton() : void;
}
