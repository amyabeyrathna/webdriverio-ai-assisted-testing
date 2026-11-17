export const config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 2,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1000']
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
    services: ['chromedriver'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeTest: async function () {
        await browser.maximizeWindow();
    },
    afterTest: async function (_test, _context, result) {
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    }
};
