import {test} from "@playwright/test"
test('create a lead using CSS Selector',async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("democsr2")  //Enter the username
    await page.locator('.inputLogin').nth(1).fill("crmsfa") //Enter the password
    await page.locator('[type="submit"]').click() //Click the Login button

    await page.locator('#button').click() //Click CRM/SFA
    await page.waitForTimeout(2000)
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click() //Click Leads
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click() // Click Create Lead
    await page.waitForTimeout(2000)

    await page.locator('.inputBox').nth(0).fill("Testleaf")  //Fill the Company Name
    await page.locator('#createLeadForm_firstName').fill('Mithra') //Fill the First Name
    await page.locator('#createLeadForm_lastName').fill('Shanmugasundaram') // Fill the Last Name
    await page.locator('.inputBox').nth(8).fill('Miss') //Fill the Salutation
    await page.locator('[name="generalProfTitle"]').fill('QA') //Fill the Title
    await page.locator('[name="annualRevenue"]').fill('400000') //Fill the Annual Revenue
    await page.locator('[name="departmentName"]').fill('Testing') //Fill the Department

    const sourcedropDown=page.locator('[name="dataSourceId"]') //Locate the Source dropdown using a CSS selector
    const dropDownValue=await sourcedropDown.count()
    for (let i=0;i<dropDownValue;i++){ //Iterate through all options in the Source dropdown
        console.log((await sourcedropDown.nth(i)).innerText ) //Print each dropdown value/text in the console
    }
    await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567890') //Fill the Phone Number
    await page.locator('.smallSubmit').click() //Click the Create Lead button
})