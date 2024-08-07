import { Locator, Page } from '@playwright/test';

export class GetStartedPage {
    private readonly page: Page;
    private readonly firstNameTextBox: Locator;
    private readonly lastNameTextBox: Locator;
    private readonly businessEmailTextBox: Locator;
    private readonly phoneNumberRegionDropdown: Locator;
    private readonly phoneNumberTextBox: Locator;
    private readonly companyNameTextBox: Locator;
    private readonly jobTitleTextBox: Locator;
    private readonly companyTypeDropDown: Locator;
    private readonly companySizeDropDown: Locator;
    private readonly companyCountryDropDown: Locator;
    private readonly companyRegionTextBox: Locator;
    private readonly annualProgrammaticBudgetDropDown: Locator;
    private readonly howYouLookToWorkWithusDropDown: Locator;
    private readonly iAgreeCheckBox: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameTextBox = this.page.locator('#first_name');
        this.lastNameTextBox = this.page.locator('#last_name');
        this.businessEmailTextBox = this.page.locator('#email');
        this.phoneNumberRegionDropdown = this.page.locator('label.sa-flag-label');
        this.phoneNumberTextBox = this.page.locator('#phone');
        this.companyNameTextBox = this.page.locator('#company_name');
        this.jobTitleTextBox = this.page.locator('#job_title');
        this.companyTypeDropDown = this.page.locator('#company_type');
        this.companySizeDropDown = this.page.locator('#company_size');
        this.companyCountryDropDown = this.page.locator('#country');
        this.companyRegionTextBox = this.page.locator('#region');
        this.annualProgrammaticBudgetDropDown = this.page.locator('#budget');
        this.howYouLookToWorkWithusDropDown = this.page.locator('#intention');
        this.iAgreeCheckBox = this.page.locator('label.form-check-label.sa-consent-box-extension');
        this.submitButton = this.page.locator('button.btn.btn-blue-300.btn-lg.sa-submit');
    }
  
    async enterFirstName(firstName: string) {
      await this.firstNameTextBox.fill(firstName);
    }
  
    async enterLastName(lastName: string) {
      await this.lastNameTextBox.fill(lastName);
    }
  
    async enterBusinessEmail(email: string) {
      await this.businessEmailTextBox.fill(email);
    }
  
    async selectPhoneNumberRegion(region: string) {
      await this.phoneNumberRegionDropdown.selectOption({ label: region });
    }
  
    async enterPhoneNumber(phoneNumber: string) {
      await this.phoneNumberTextBox.fill(phoneNumber);
    }
  
    async enterCompanyName(companyName: string) {
      await this.companyNameTextBox.fill(companyName);
    }
  
    async enterJobTitle(jobTitle: string) {
      await this.jobTitleTextBox.fill(jobTitle);
    }

    async selectCompanyType(companyType: string) {
      await this.companyTypeDropDown.selectOption({ value: companyType });
    }
  
    async selectCompanySize(companySize: string) {
      await this.companySizeDropDown.selectOption({ value: companySize });
    }
  
    async selectCompanyCountry(country: string) {
      await this.companyCountryDropDown.selectOption({ label: country });
    }
  
    async enterCompanyRegion(region: string) {
      await this.companyRegionTextBox.fill(region);
    }
  
    async selectAnnualProgrammaticBudget(budget: string) {
      await this.annualProgrammaticBudgetDropDown.selectOption({ value: budget });
    }
  
    async selectHowYouLookToWorkWithUs(option: string) {
      await this.howYouLookToWorkWithusDropDown.selectOption({ value: option });
    }
  
    async checkIAgree() {
      await this.iAgreeCheckBox.check();
    }
  
    async clickSubmit() {
      await this.submitButton.click();
    }
}