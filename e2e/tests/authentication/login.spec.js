/**
 * Created by sergiu on 10/18/16.
 */

var homePage = require('../../pages/home.po');
var loginPage = require('../../pages/authentication/login.po');
var dashboardPage = require('../../pages/');
var testData = require('../../testData/login.td');

var user = testData.valid;

describe('Login As An User', function () {

  it('When: User logs in to the app.', function () {
    loginPage.login(user.email, user.password);
  });

  it('Then: User is successfully logged', function () {
    dashboardPage.validateLogin();
  });
});

describe('Login Validation', function () {

  it('When: User leaves email and password fields blank', function () {
    loginPage.fillCredentials('', '');
  });

  it('Then: Login button is greyed out', function () {
    loginPage.validateButtonsState();
  });

  it('When: User leaves password fields blank', function () {
    loginPage.fillCredentials('sergiu@moduscreate.com', '');
  });

  it('Then: Login button is greyed out', function () {
    loginPage.validateButtonsState();
  });

  it('When: User leaves email fields blank', function () {
    loginPage.fillCredentials('', '123456');
  });

  it('Then: Login button is greyed out', function () {
    loginPage.validateButtonsState();
  });

  it('When: User provides invalid email and valid password', function () {
    loginPage.fillCredentials('sergiu', '123456');
  });

  it('Then: Login button is greyed out', function () {
    loginPage.validateButtonsState();
  });

  it('When: User provides non-existing email and password', function () {
    loginPage.fillCredentials('nicu@modusCreate.com', '1234');
  });

  it('Then: Login is not successful', function () {
    loginPage.loginNotSuccessful();
  });

  it('When: User provides valid email and invalid password', function () {
    loginPage.fillCredentials('sergiu@moduscreate.com', '1234');
  });

  it('Then: Login is not successful', function () {
    loginPage.loginNotSuccessful();
  });

  it('When: User provides invalid email and valid password', function () {
    loginPage.fillCredentials('nicu@modusCreate.com', '123456');
  });

  it('Then: Login is not successful', function () {
    loginPage.loginNotSuccessful();
  });

  it('When: User goes back to Landing Home page', function () {
    loginPage.backToHomePage();
  });

  it('Then: User is successfully on Landing Home page', function () {
    homePage.validatePage();
  });
});
