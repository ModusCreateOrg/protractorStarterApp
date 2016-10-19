/**
 * Created by sergiu on 10/18/16.
 */

module.exports = {

  elements: {
    emailField: element(by.css('')),
    passwordField: element(by.css('')),
    loginButton: element(by.css('')),
    cancelButton: element(by.css('')),
    forgotPasswordLink: element(by.css('')),

    popup: {
      text: element(by.css('')),
      button: element(by.css(''))
    }
  },

  fillCredentials: function (email, password) {
    this.elements.emailField.clear().sendKeys(email);
    this.elements.passwordField.clear().sendKeys(password);
  },

  login: function (email, password) {
    this.fillCredentials(email, password);
    this.elements.loginButton.click();
  },

  loginNotSuccessful: function () {
    this.elements.loginButton.click();
    expect(browser.getCurrentUrl()).toContain('#/landing/login');
    expect(this.elements.popup.text.getAttribute('innerText')).toContain('Invalid username and password combination');
    this.elements.popup.button.click();
  },

  backToHomePage: function () {
    this.elements.cancelButton.click();
  }
};
