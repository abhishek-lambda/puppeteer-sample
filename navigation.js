'use strict';
const { strict } = require('once');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => {
    const caps = {
        'browserName': 'Chrome',
        'version': 'latest',
        'platform': 'Windows 10',
        'build': 'puppeteer-build-1',
        'name': 'My first Puppeteer test',
        'resolution':'1366x768',
        'username': 'Your UserName',
        'access_key': 'Your Access Key',
    };
    try {
        const browser = await puppeteer.connect({
            browserWSEndpoint:
                `wss://stage-cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(caps))}`,
        });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1024,
            height: 768,
            deviceScaleFactor: 1,
          });
        console.log("Navigating to LambdaTest");
        await page.goto('https://www.lambdatest.com/');
        console.log("Navigating to Pricing");
        await page.goto('https://www.lambdatest.com/pricing');
        console.log("Navigating to Automation");
        await page.goto('https://www.lambdatest.com/automation-testing');
        console.log("Closing browser");
        await browser.close();

    } catch (e) {
        console.log("Error - ", e);
    }
})();