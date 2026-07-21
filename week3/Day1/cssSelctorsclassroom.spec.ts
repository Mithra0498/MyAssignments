import {test} from "@playwright/test"


test("Learn CSS selectors",async ({page}) => {

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('input[type="password"]').fill('TestLeaf@2025')
await page.locator('.input button r4 wide primary').click
})