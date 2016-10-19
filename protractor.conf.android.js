/**
 * Protractor configuration to use for Android testing
 *
 * @example
 *     npm protractor-test-android
 */
var merge = require('deepmerge');
var baseConf = require('./protractor.conf.base');

exports.config = merge(baseConf.config, {

    // Please see: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
    capabilities: {
        browserName   : '',
        // Absolute Path to application .app file
        app           : '[APPLICATION_APP_FILE]',
        appPackage    : '[APPLICATION_PACKAGE_NAME]',
        appActivity   : '.MainActivity',
        automationName: 'Appium',

        deviceName        : '[TEST_DEVICE_NAME]',
        platformName      : 'Android',
        platformVersion   : '[ANDROID_VERSION]',
        autoWebview       : true,
        autoWebviewTimeout: 20000,
        autoAcceptAlerts  : true,
        deviceReadyTimeout: 120
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1200000
    },

    onPrepare: function () {
        // Set the timestamp of the report directory
        var today, timeStamp;
        today     = new Date();
        timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-'
            + today.getFullYear() + '-' + today.getHours() + 'h-'
            + today.getMinutes() + 'm';

        // Configuration of the terminal reporter
        jasmine.getEnv().addReporter(new specReporter({
            displayStacktrace  : true,
            displaySpecDuration: true,
            displaySuiteNumber : true
        }));

        // Configuration of HTML reporter
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath                     : './testReports/e2e' + timeStamp + '/',
                filePrefix                   : 'e2e',
                takeScreenshots              : true,
                takeScreenshotsOnlyOnFailures: true,
                consolidate                  : true,
                consolidateAll               : true
            })
        );

        // Set some browser properties
        browser.manage().timeouts().pageLoadTimeout(10000);
        browser.manage().timeouts().implicitlyWait(10000);

        browser.sleep(2000);
    },

    // Here can be stored any global parameters and their values in a MAP based format
    params: {}
});
