import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

test('logout', async ({ page }) => {
    await login(page)
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
