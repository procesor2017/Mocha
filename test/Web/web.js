const playwright = require('playwright')
const chai = require('chai')
const expect = chai.expect
const BASE_URL = 'https://www.google.com/'

// playwright variables
let page, browser, context

describe('Try', () => {

    beforeEach(async () => {
        browser = await playwright['chromium'].launch({headless: false})
        context = await browser.newContext()
        page = await context.newPage(BASE_URL)
    })

    afterEach(async function(){
        await browser.close()
    })

    it('Ukaž se', async() => {
        await page.goto('https://procesor2017.github.io/gitHubWorkShop/');
        await page.fill('[name=user]', 'tesena');
        await page.type('[name=password]', 'tesena');
        await page.click('[type=submit]');
        klingon = await page.waitForSelector('[id=klingon]');
        expect(klingon).to.exist;
    })
})
