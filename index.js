const puppeteer = require('puppeteer');

const cryptorankUrl    = "http://cryptorank.io";
const searchBtn = `#global-search-mobile-button`;
const searchInput  = `#global-search-input`;
const searchText = `gamefi`;
const gamefiBtn = '#global-search-item-2';
const nextPageBtn = `#root-container > section > div:nth-child(1) > div > div.sc-df5d79f7-1.ifbGzF > div.sc-3a08d2a0-0.ijiZVY > button:nth-child(4)`;

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        ignoreDefaultArgs: ["--enable-automation"],
        userDataDir: "./user_data",
        defaultViewport: null,
        ignoreHTTPSErrors: true,
    });

    for (let index = 0; index < 100000000; index++) {
        await cryptorank(browser);
    }
    await browser.close();

})();

async function cryptorank(browser){
    try {
        const page = await browser.newPage();
        await page.goto(cryptorankUrl);
        await page.waitForSelector(searchBtn)
        await page.click(searchBtn)
        await page.waitForTimeout(3000);
    
        await page.waitForSelector(searchInput);
        await page.type(searchInput, searchText);
        await page.waitForTimeout(3000);
    
        await page.waitForSelector(gamefiBtn)
        await page.click(gamefiBtn)
        await page.waitForTimeout(3000);
    
        await autoScrollDown(page);
        await autoScrollUp(page);
    
        await page.click(nextPageBtn);
        await autoScrollDown(page);
        await autoScrollUp(page);
        
        await page.close()
    } catch (error) {
        console.error('Try/catch error:', error);
    }	
};


async function autoScrollDown(page){
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageDown");
    await page.waitForTimeout(3000);
}

async function autoScrollUp(page){
    await page.keyboard.press("PageUp");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageUp");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageUp");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageUp");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageUp");
    await page.waitForTimeout(3000);
    await page.keyboard.press("PageUp");
    await page.waitForTimeout(3000);
}