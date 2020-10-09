# About nodejs library
There you can find everything about library which i find and try it.
## Bookmarks
- [Assertion Library](#assertion-library)
- [Request Library](#request-library)
- [Reporting](#Reporting)


## Assertion Library
In test, I use assertion library (Chai and Should), but you can find more library as:
| Assertion library | describe |
|:----------:|:-------------:|
|[Chai](https://www.chaijs.com/)| Basic library with Should, Expect etc.  assertion |
|[Should.js](https://github.com/shouldjs/should.js)| Command extensions for Should |
|[Expect.js](https://github.com/Automattic/expect.js)| Minimalistic BDD assertion toolkit based on should.js |
|[Beeter-assert](https://github.com/tj/better-assert)| Better c-style assertions using callsite for self-documenting failure messages. |

Example:
```
expect(title).to.equal('Posts containing "mocha" - Stack Overflow'); // Chai
title.should.equal(actual, 'Posts containing "mocha" - Stack Overflow'); // Should.js
```

## Request Library
I use two libraries. Request and http/https. First is most famous but have some trouble with async. Second library is implemented into js but doesnt have many options.
| Request library | describe |
|[Request](https://www.npmjs.com/package/request)| Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default. |
|[http](https://nodejs.org/api/http.html)| Library from js.  |
|[Needle](https://www.npmjs.com/package/needle)| Minimalistic BDD assertion toolkit based on should.js |

If you try to create api test, be wary about async.

## Reporting
### HTML Report
Mocha has implemented some reporters, but its just create reports to console. For create HTML report, Its best options use  [MOCHAWESOME](https://www.npmjs.com/package/mochawesome).

For use with mocha you can use
```
mocha --reporter mochawesome
```

or you can setup in mocharc.js file.

### Reporting Tools as Kibana, Report Portal and others...
Mocha has implemented too many tools for reporting. More information you can find here:
 - [Report portal](https://github.com/reportportal/agent-js-mocha)
 - [Kibana and Elastic](https://github.com/mpahuja/mocha-elk-reporter)
 - [Allure](https://www.npmjs.com/package/mocha-allure-reporter)

## Mocking
<-- soon -->