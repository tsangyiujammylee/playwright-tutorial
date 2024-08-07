import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private readonly uri = "/login";
  private readonly page: Page;
  private readonly emailTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly hideUnhidePasswordButton: Locator;
  private readonly rememberMeCheckBox: Locator;
  private readonly recoverPasswordLink: Locator;
  private readonly loginButton: Locator;
  private readonly useSingleSignOnLink: Locator;
  private readonly acceptCookieButton: Locator;
  private readonly loginErrorMessage: Locator;

  constructor(page: Page) {
      this.page = page;
      this.emailTextBox = this.page.locator('#login-email');
      this.passwordTextBox = this.page.locator('#login-password');
      this.hideUnhidePasswordButton = this.page.locator('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.css-1baapl3-MuiButtonBase-root-MuiIconButton-root');
      this.rememberMeCheckBox = this.page.locator('input.PrivateSwitchBase-input.css-1m9pwf3');
      this.recoverPasswordLink = this.page.locator('a:has-text("Recover Password")');
      this.loginButton = this.page.locator('[data-testid="login-button"]');
      this.useSingleSignOnLink = this.page.locator('a:has-text("Use Single Sign-On")');
      this.acceptCookieButton = this.page.locator('[data-testid="gdpr-cookie-consent-agree-button"]');
      this.loginErrorMessage = this.page.locator('#helper-label-login-password');
  }

  async goToPage(){
    await this.page.goto(this.uri);
  }

  async waitForPageLoad()
  {
    await this.emailTextBox.waitFor({ state: 'attached' });
  }  

  async enterEmail(email: string) {
    await this.emailTextBox.fill(email);
    }

  async enterPassword(password: string) {
    await this.passwordTextBox.fill(password);
  }

  async togglePasswordVisibility() {
    await this.hideUnhidePasswordButton.click();
  }

  async checkRememberMe() {
    await this.rememberMeCheckBox.check();
  }

  async uncheckRememberMe() {
    await this.rememberMeCheckBox.uncheck();
  }

  async clickRecoverPassword() {
    await this.recoverPasswordLink.click();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async clickUseSingleSignOn() {
    await this.useSingleSignOnLink.click();
  }

  async clickAcceptCookiesButton() {
    // Add a wait as the cookie banner appears later in the page load
    await this.acceptCookieButton.waitFor({ state: 'attached' });
    await this.acceptCookieButton.click();
  }

  async getLoginErrorMessage() {
    // Add a wait as the cookie banner appears later in the page load
    const errorText = await this.loginErrorMessage.textContent();
    return errorText;
  }

  async login(email: string, password: string){
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}