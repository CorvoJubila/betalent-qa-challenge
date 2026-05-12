import { expect, Page } from '@playwright/test';

export async function login(page: Page) {

    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="username"]').fill('standard_user');

    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

}

export async function addProductToCart(page: Page) {

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(
        page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('1');

}