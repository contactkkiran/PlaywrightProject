import {test,expect,Browser,Page,Locator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'
]\
test('login test',async ({})=>{

    const browser:Browser= await webkit.launch({headless:false});
    const page:Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('#input-email').fill('contactkkiran@gmail.com');
    await page.locator('#input-password').fill('Varma@143');
    await page.locator('#content > div > :nth-child(2) >div>form >:nth-child(3) ').click()
    const actualPageTitle = await page.title();
    const expectedTitle = 'My Account';
    await page.screenshot({path:'homepage3.png'});
    expect(actualPageTitle).toEqual(expectedTitle);

    await new Promise(()=>{})
});


