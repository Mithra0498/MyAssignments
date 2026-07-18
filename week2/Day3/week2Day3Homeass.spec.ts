import { test } from "@playwright/test";
import { chromium, webkit } from "playwright";

test("RedBus in Edge and Flipkart in Webkit", async () => {

    // Launch Edge browser instance
    const edgeBrowser = await chromium.launch({
        channel: "msedge"
    });

    // Create Edge browser page
    const edgePage = await edgeBrowser.newPage();

    // Open RedBus website
    await edgePage.goto("https://www.redbus.in");

    // Print RedBus title and URL
    console.log("RedBus Title: " + await edgePage.title());
    console.log("RedBus URL: " + edgePage.url());


    // Launch Webkit browser instance
    const webkitBrowser = await webkit.launch();

    // Create Webkit browser page
    const webkitPage = await webkitBrowser.newPage();

    // Open Flipkart website
    await webkitPage.goto("https://www.flipkart.com");

    // Print Flipkart title and URL
    console.log("Flipkart Title: " + await webkitPage.title());
    console.log("Flipkart URL: " + webkitPage.url());


    // Close browser instances
    await edgeBrowser.close();
    await webkitBrowser.close();

});