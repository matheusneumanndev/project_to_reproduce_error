const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceType': 'phone',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/valorPRO-v.3.0.2.apk'),
        'appium:noReset': true,
        'appium:newCommandTimeout': 480,
    },
];

exports.config = config;
