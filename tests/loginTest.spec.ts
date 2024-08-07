import { test, expect} from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { OverviewCampaignPage } from './pages/overviewCampaign.page';

test.describe('Login Tests', () => {
  test('Login successful with admin account', async ({ page }) => {
    // create a new todo locator
    const loginPage = new LoginPage(page);
    const overviewCampaignPage = new OverviewCampaignPage(page);
    await loginPage.goToPage();
    await loginPage.waitForPageLoad();
    await loginPage.clickAcceptCookiesButton();
    await loginPage.login("ian.lee+automation@test-stackadapt.com", "test12345678");
    await overviewCampaignPage.waitForPageLoad();
    
    expect(overviewCampaignPage.isOnPage()).toBe(true);
  });

  test('Login fail with invalid account', async ({ page }) => {
    // create a new todo locator
    const loginPage = new LoginPage(page);
    await loginPage.goToPage();
    await loginPage.waitForPageLoad();
    await loginPage.clickAcceptCookiesButton();
    await loginPage.login("invalid", "invalid");
    expect(await loginPage.getLoginErrorMessage()).toBe("Invalid email or password.");
  });

});