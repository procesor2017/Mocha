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

## Watch flags
Mocha comes with a special '-- watch' flag that will automatically run any specified tests when it sees changes in a certain file or directory.

For watching test with tag @i just type to your cmd and press Enter:
```
mocha --w  --grep '@i2'
```
Now you watching test with tag @tag. If you want to kill -w just press crtl-c.

### Example of a complete command:
```
mocha --reporter mochawesome -w --grep '@tag' test/api/api.js -timeout 4000
```
This command does this things:
 - --reporter = create html report with mochawesome
 - -w = watching test
 - --grep = mocha starts just test with @tag in description
 - test/api/api.js = start just file api.js in foler test/api
 - -timeout 4000 = set up timeout for mocha

 ## Hooks
 ### Hooks in TS/TC
 With its default “BDD”-style interface, Mocha provides the hooks before(), after(), beforeEach(), and afterEach(). These should be used to set up preconditions and clean up after your tests.
 ```
 describe('hooks', function () {
  before(function () {
    // runs once before the first test in this block
  });

  after(function () {
    // runs once after the last test in this block
  });

  beforeEach(function () {
    // runs before each test in this block
  });

  afterEach(function () {
    // runs after each test in this block
  });

  // test cases
});
```
### Hooks as export function/variables from others file
But you can use hooks too for setUp objects on webpage. 

In file .mocharc.js create:
```
 -requiere: .test/hooks  // .test/hooks is path to hooks file
```

In file with hooks.js, We going to creating hooks which must be run before the other tests.
```
//name file hooks.js
const webBrowser = require("playwright").chromium;

exports.hooks = {
  async beforeAll() {
    global.browser = await webBrowser.launch({ headless: false });
    global.context = await global.webBrowser.newContext();
    global.page = await global.context.newPage();
  }
```

After that, you create object file which we can use as global stack with objects from webpage
```
//name file: object.js
class Homepage {
  constructor() {
    this.url = "https://www.tesena.com";
  }

  get pageTitle() {
    return page
      .title()
      .then(function (title) {
        return title;
      })
      .catch(function (error) {
        console.log(`Error: ${error}`);
      });
  }
}
module.exports = new Homepage();
```
These object file we call it to test file.

```
//name file test.js
const Homepage = require("../pageobjects/homepage"); // path to the export file with addiction

describe("testing globals", function () {
  beforeEach(async function () {
    await page.goto(Homepage.url, { waitUntil: "networkidle" });
  });

  it("page Title", async function () {
    expect(await Homepage.pageTitle).equals("Home");
  });
});
```

So the Test flow is:
We call mocha test. First start file hooks.js, because we define in .mocharc.js as requirment. After that mocha runs test.js with exporting function from object.js