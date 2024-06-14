import {test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'

test('login test',async ({})=>{

    const browser:Browser= await webkit.launch({headless:false});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    
    const username = 'admin'
    const password = ' admin'
    page.setExtraHTTPHeaders({Autherization : createAuthHeader(username,password)})

    await new Promise(()=>{})
    
});

function createAuthHeader(username:any, password:any){
    return 'Basic' + btoa(username+':'+ password)

}


