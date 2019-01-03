![No longer maintained](https://img.shields.io/badge/Maintenance-OFF-red.svg)
### [DEPRECATED] This repository is no longer maintained
> While this project is fully functional, the dependencies are no longer up to date. You are still welcome to explore, learn, and use the code provided here.
>
> Modus is dedicated to supporting the community with innovative ideas, best-practice patterns, and inspiring open source solutions. Check out the latest [Modus Labs](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated) projects.

[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1531492623/labs/logo-black.png)](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated)

---
# Running e2e Tests

## Install requirements using the following commands:
change dir to _'/test/'_

- `npm install appium -g`
- `npm install ios-webkit-debug-proxy -g`
- `npm install`
- `npm run protractor-setup`

  ## Required Android SDK components 

- "SDK Platform" for android-23, android-22 and android-21
- "Android SDK Platform-tools (latest)
- "Android SDK Build-tools" (latest)

  ## Required iOS

- OSX Platform
- Xcode installed
- Components: iOS[version you need] simulator
- OS updated to latest version

  ## Run the tests
change dir to _'/test/'_

## Run the tests on different enviroments

### Dev Acceptance Tests
Run the app on local environment in web browser. Please see _client/README.md_

- open Terminal and run the following command:
- `npm run protractor-test-ci`
 - "If you receive a Selenium Server JAR not found please update protractor.conf.ci.js 'seleniumServerJar' to the new version of selenium server from node_modules/protractor/selenium"
- go to _test/e2e_reports/[dateTimeOfTestRun]/*_ (HTML test reports are saved at this location)

### iOS Device
Build/Deploy the app on an iOS device. Please see _client/README.md_

- connect the device via USB cable
 - open 2 Terminals and run the following commands:
 - `appium`
 - `ios_webkit_debug_proxy -c [UDID of your iOS device]:27753 -d`
- edit _protractor.conf.ios.dqa.js_ and change the bellow accordingly:
```
app               : '',
deviceName        : '', 
udid              : '',
platformName      : 'iOS', 
platformVersion   : '',
```
- `npm run protractor-test-ios`

### Android Device
Build/Deploy the app on an Android device. Please see _client/README.md_

- connect the device via USB cable
- open Terminal and run the following command:
 - `adb start-server`
 - `adb devices` (to verify adb connected devices)
 - `appium`
- edit _protractor.conf.android.dqa.js_ and change the bellow accordingly :
```
app               : '',
deviceName        : '', 
platformName      : 'Android',
platformVersion   : '', 
```
- `npm run protractor-test-android`


# Running integration Tests

## Install requirements using the following commands:
change dir to _'/test/'_

## Run the tests
change dir to _'/test/'_

- `npm run integration-test`

# Running performance Tests
Tests are using a version of jMeter 3.0 with custom plugins

## Install requirements

- install java JDK and add to path
- unzip _test/performance/apache_jmeter_3.0.zip_
- open _bin/jmeter.exec_ and edit the following (if not already edited):
```
line 91 to: HEAP="-Xms2048m -Xmx2048m"
line 96 to: NEW="-XX:NewSize=512m -XX:MaxNewSize=512m"
```

## Run the tests

- File > Open > [choose _PerformanceTests.jmx_]
- under _jMeter Users_ Thread Group change:
```
Number of Threads to desired value: Default = 10
Loop Count to desired value: Default = 10
```
 - this means 10 concurrent users for 10 times
- Run > Start
 
## Inspect the results
There are 4 listeners at the end of the Thread Group that provide useful info.
