/**
 * Created by sergiu on 10/18/16.
 */

module.exports = {

  elements: {
    firstNameField: element(by.css('')),
    lastNameField: element(by.css('')),
    emailField: element(by.css('')),
    passwordField: element(by.css('')),

    registerButton: element(by.css('')),
    cancelButton: element(by.css(''))
  },

  fillForm: function (user) {
    this.elements.firstNameField.clear().sendKeys(user.firstName);
    this.elements.lastNameField.clear().sendKeys(user.lastName);
    this.elements.emailField.clear().sendKeys(user.email);
    this.elements.passwordField.clear().sendKeys(user.password);
  },

  newAccount: function (user) {
    this.fillForm(user);
    this.elements.registerButton.click();
  },

  backToHomePage: function () {
    this.elements.cancelButton.click();
  }
};
