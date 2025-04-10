import { test, expect } from "@playwright/test";

test("API Test - GET Products", async ({ request }) => {
    const requestURL = "https://fakestoreapi.com/products";

    const response = await request.get(requestURL);

    const responseBody = await response.json();

    await expect(response.ok()).toBeTruthy();

    await expect(response.status()).toBe(200);

    await expect(responseBody).toContainEqual(
        expect.objectContaining({
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        })
    );
});

test("API Test - GET Product 5", async ({ request }) => {
    const requestURL = "https://fakestoreapi.com/products/5";
  
    const response = await request.get(requestURL);
    const responseBody = await response.json();
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  
    await expect(responseBody).toEqual(
        expect.objectContaining({
           title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        })
    );
});
