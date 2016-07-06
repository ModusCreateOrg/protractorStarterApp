var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.loadConfig({
    spec_dir                    : "integration/tests",
    spec_files                  : [
        "**/*[sS]pec.js"
    ],
    stopSpecOnExpectationFailure: false,
    random                      : false
});


jasmine.onPrepare(function () {
    var today, timeStamp;
    today     = new Date();
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-'
        + today.getFullYear() + '-' + today.getHours() + 'h-'
        + today.getMinutes() + 'm';

    // Configuration of HTML reporter
    jasmine.addReporter(
        new Jasmine2HtmlReporter({
            savePath                     : './testReports/e2e' + timeStamp + '/',
            filePrefix                   : 'e2e',
            takeScreenshots              : true,
            takeScreenshotsOnlyOnFailures: true,
            consolidate                  : true,
            consolidateAll               : true
        })
    );
});

jasmine.onComplete(function (passed) {
    if (passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});