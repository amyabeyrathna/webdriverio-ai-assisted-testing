
import allure from '@wdio/allure-reporter';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');

export const config = {
    runner: 'local',

    specs: [path.join(projectRoot, 'tests/specs/**/*.js')],

    maxInstances: 1,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: process.env.CI
                    ? ['--headless=new', '--disable-gpu', '--window-size=1440,900']
                    : []
            }
        }
    ],

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    mochaOpts: {
        timeout: 60000,
        retries: 0
    },

    waitforTimeout: 10000,

    beforeTest: async function () {
        await browser.maximizeWindow();
    },

    afterTest: async function (_test, _context, result) {
        if (!result.passed) {
            const screenshot = await browser.takeScreenshot();

            allure.addAttachment(
                'Failure Screenshot',
                Buffer.from(screenshot, 'base64'),
                'image/png'
            );
        }
    }
};
