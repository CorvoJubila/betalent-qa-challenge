import { test, expect } from '@playwright/test';
import { addProductToCart, login } from '../helpers/auth';

test('add product on cart and validate', async ({ page }) => {
    await login(page)
    await addProductToCart(page)

});

test('remove product on cart and validate', async ({ page }) => {
    await login(page)
    await expect(page).toHaveURL(/inventory/);
    await addProductToCart(page)
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
});