/**
 * Protractor configuration to use in CI
 *
 * @example
 *     npm protractor-test-ci
 */
var merge = require('deepmerge');
var baseConf = require('./protractor.conf.base');

exports.config = merge(baseConf.config, {

    // Please see: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
    capabilities: {
        // android|chrome|firefox|htmlunit|internet explorer|iPhone|iPad|opera|safari
        'browserName'  : 'chrome',
        // Please see: https://sites.google.com/a/chromium.org/chromedriver/
        'chromeOptions': {
            args: [
                'incognito',
                'disable-extensions'
            ]
        }
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 1200000
    },

    // Here can be stored any global parameters and their values in a MAP based format
    params: {}
});
