import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth';

test('capture lists az', async ({ page }) => {
    await login(page);

    await page
        .locator('[data-test="product-sort-container"]')
        .selectOption('az');

    const products = await page
        .locator('[data-test="inventory-item-name"]')
        .allTextContents();

    const sortedProducts = [...products];

    sortedProducts.sort();

    expect(products).toEqual(sortedProducts);
});

test('capture lists za', async ({ page }) => {
    await login(page);

    await page
        .locator('[data-test="product-sort-container"]')
        .selectOption('za');

    const products = await page
        .locator('[data-test="inventory-item-name"]')
        .allTextContents();

    const sortedProducts = [...products];

    sortedProducts.sort().reverse();

    expect(products).toEqual(sortedProducts);
});

test('capture lists lohi', async ({ page }) => {
    await login(page);

    await page
        .locator('[data-test="product-sort-container"]')
        .selectOption('lohi');

    const pricesText = await page
        .locator('[data-test="inventory-item-price"]')
        .allTextContents();

    const prices = pricesText.map((price) =>
        Number(price.replace('$', ''))
    );

    const sortedPrices = [...prices];

    sortedPrices.sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
});

test('capture lists hilo', async ({ page }) => {
    await login(page);

    await page
        .locator('[data-test="product-sort-container"]')
        .selectOption('hilo');

    const pricesText = await page
        .locator('[data-test="inventory-item-price"]')
        .allTextContents();

    const prices = pricesText.map((price) =>
        Number(price.replace('$', ''))
    );

    const sortedPrices = [...prices];

    sortedPrices.sort((a, b) => b - a);

    expect(prices).toEqual(sortedPrices);
});