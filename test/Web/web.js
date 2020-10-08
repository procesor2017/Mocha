const playwright = require('playwright')
const chai = require('chai')
const { doesNotMatch } = require('assert')
const expect = chai.expect
const BASE_URL = 'https://www.google.com/'

// playwright variables
let page, browser, context


describe('Playwright :: Open browser', async() => {

    beforeEach(async function() {
        browser = await playwright['chromium'].launch({headless: false})
        context = await browser.newContext()
        page = await context.newPage(BASE_URL)
    });

    afterEach(async function(){
        await browser.close()
    });

    it('Open webpage :: input :: find klingon', async() => {
        await page.goto('https://procesor2017.github.io/gitHubWorkShop/');
        await page.fill('[name=user]', 'tesena');
        await page.type('[name=password]', 'tesena');
        await page.click('[type=submit]');
        klingon = await page.waitForSelector('[id=klingon]');
        expect(klingon).to.exist;
    });

    it("Try to something bigger maybe @Stack", async function() {
        await page.goto('https://stackoverflow.com/');
        await page.waitForSelector('[class="-img _glyph"]')
        await page.type('[name="q"]', 'mocha');;
        await page.press('[name="q"]', 'Enter');
        await page.waitForSelector('[class="question-summary search-result"]');
        const title = await page.title()
        const searchResults = await page.innerText('[class="grid--cell fl1 fs-headline1 mb0"]')
        expect(searchResults).to.equal('Search Results');
        expect(title).to.equal('Posts containing "mocha" - Stack Overflow')
    })

});
