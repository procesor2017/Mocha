const { doesNotMatch } = require('assert');

var expect = require('chai').expect,
    wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;


var desiredCapabilities =  {
    platformName: 'Android',
    app: 'C:\\AndroidApps\\ALZA.apk',
    appPackage: 'cz.alza.eshop',
    appActivity: 'cz.alza.eshop.common.activity.proxy.HomeProxyActivity',
    avdReadyTimeout: '20000',
    deviceName: 'Pixel 3 API 28',
    browserName: '',
    };

describe("Mobile testing :: 01", function(){
    beforeEach(function(){
        return driver = new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCapabilities).build();
    })
    afterEach(function(){
        return driver.quit();        
    })

    it("Proof number :: 1 @mobile", async function(){
        let chooseShop = await driver.findElement(By.xpath("//*[@resource-id='cz.alza.eshop:id/choose_shop_btn']"));
        await chooseShop.click();

        // wait than button with OK is visible
        const element = By.xpath("//*[@text='OK']");
        driver.wait(until.elementLocated(element, 40000));
        const whatElement = driver.findElement(element);
        driver.wait(until.elementIsVisible(whatElement), 40000);

        // after that we can press button :-)
        whatElement.click();

    });    

    it ("Proof number :: 2 @i2", function(){
        return driver.findElement(By.xpath("//*[@resource-id='cz.alza.eshop:id/choose_shop_btn']"))
            .then(_ => driver.findElement(By.xpath("//*[@resource-id='cz.alza.eshop:id/choose_shop_btn']")).click())
            .then(_ => driver.wait(until.elementLocated(By.xpath("//*[@text='OK']"), 20000)))
            .then(_ => driver.findElement(By.xpath("//*[@text='OK']")).click())
            .then(_ => driver.wait(until.elementLocated(By.xpath("//*[@resource-id='cz.alza.eshop:id/close_btn']"), 20000)))
            .then(_ => driver.findElement(By.xpath("//*[@resource-id='cz.alza.eshop:id/close_btn']")).click())
    });

})