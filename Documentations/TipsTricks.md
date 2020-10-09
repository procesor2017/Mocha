# Basic
Information for which there is no place left in others .md files

## Taggin test
In mocha u can use tag like in RF. 

### Prepare test
Add tag to test description in example is @i2
```
it ("Proof number :: 2 @i2", function(){
        return driver.findElement(By.xpath("//*[@resource-id='cz.alza.eshop:id/choose_shop_btn']"))
            .then(_ => driver.findElement(By.xpath("//*[@resource-id='cz.alza.eshop:id/choose_shop_btn']")).click())
            .then(_ => driver.wait(until.elementLocated(By.xpath("//*[@text='OK']"), 20000)))
            .then(_ => driver.findElement(By.xpath("//*[@text='OK']")).click())
            .then(_ => driver.wait(until.elementLocated(By.xpath("//*[@resource-id='cz.alza.eshop:id/close_btn']"), 20000)))
            .then(_ => driver.findElement(By.xpath("//*[@resource-id='cz.alza.eshop:id/close_btn']")).click())
    });
```
### Usage
For starts you must declare:
 - Command:
   - --grep = Only run tests matching this string or regexp
   - --fgrep = Only run tests containing this string 
   - --invert = Inverts --grep and --fgrep matches 
 - tag = In example is @i2
 - path = If you need specify path to your file.
    
Command:
```
mocha <command> <tag> <path>
```

Command for example:
```
mocha --grep '@i2'
```