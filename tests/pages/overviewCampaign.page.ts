import test, { Locator, Page } from '@playwright/test';

export class OverviewCampaignPage {
  private readonly uri = "/overview/campaigns";
  private readonly page: Page;
  private readonly addCampaignButton: Locator;

  constructor(page: Page) {
      this.page = page;
      this.addCampaignButton = this.page.locator('a[href="/editor"]');
  }

  async goToPage(){
    await this.page.goto(this.uri);
  }

  isOnPage()
  {
    const currentUri = this.page.url();

    return currentUri.endsWith(this.uri);
  }

  async clickAddCampaignButton() {
    await this.addCampaignButton.click();
  }

  async waitForPageLoad()
  {
    await this.addCampaignButton.waitFor({ state: 'visible' });
  }
}