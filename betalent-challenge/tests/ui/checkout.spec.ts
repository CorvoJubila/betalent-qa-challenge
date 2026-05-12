import { test, expect } from '@playwright/test';
import { addProductToCart, login } from '../helpers/auth';

test('checkout and validate success', async ({ page }) => {
    await login(page)
    await expect(page).toHaveURL(/inventory/);
    await addProductToCart(page)
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Jose');
    await page.locator('[data-test="lastName"]').fill('Santos');
    await page.locator('[data-test="postalCode"]').fill('05662100');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(
        page.locator('[data-test="complete-header"]')
    ).toHaveText('Thank you for your order!');
});