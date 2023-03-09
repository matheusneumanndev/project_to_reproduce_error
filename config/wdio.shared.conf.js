const video = require('wdio-video-reporter');

exports.config = {

    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'trace',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 8000,
    connectionRetryTimeout: 100000,
    connectionRetryCount: 3,
    specs: ['tests/features/**/*.feature'],
    reporters: [
        'spec',
        [
            video,
            {
                saveAllVideos: true,
                videoSlowdownMultiplier: 5,
                videoRenderTimeout: 30,
                maxTestNameCharacters: 500,
            },
        ],
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true,
            },
        ],
    ],
    reporterSyncTimeout: 100000,
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 10000000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },
    services: [
        'appium',
    ],
    appium: {
        log: false,
        args: {

        },
        command: 'appium',
    },

    port: 4723,

    // ====================
    // Some hooks
    // ====================

    // This code is responsible for taking the screenshot in case of error and attaching it to the report

    // eslint-disable-next-line no-unused-vars

    // async afterScenario(world, result, context) {
    //     await driver.reset();
    // },
    async afterStep(uri, feature, scenario) {
        // if (scenario.error) {
        // if (driver.isIOS) {
        //     driver.pause(2000);
        // }
        if (driver.isAndroid) {
            try {
                await driver.pause(5000);
                //     driver.takeScreenshot();
            } catch (e) {
                console.log(e);
            }
        }

        // }
    },
};
