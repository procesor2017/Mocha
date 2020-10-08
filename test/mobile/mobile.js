var expect = require('chai').expect,
    wd = require("selenium-webdriver"),
    by = wd.By,
    until = wd.until;

var desiredCapabilities =  {
    platformName: 'Android',
    app: 'C:\\AndroidApps\\ALZA.apk',
    appPackage: 'cz.alza.eshop',
    appActivity: 'cz.alza.eshop.common.activity.proxy.HomeProxyActivity',
    avdReadyTimeout: '10000',
    deviceName: 'Pixel 3 API 28',
    browserName: '',
    };

describe("Mobil", function(){
    it("Pokus 01 @mobile", async function(){
        let driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCapabilities).build();
            
        var okElements = await driver.findElements(By.xpath("cz.alza.eshop:id/choose_shop_btn"));
        console.log("Ahoj")
        await driver.quit();
    })    
})