const BasePage = require("./BasePage");

class SignInPage extends BasePage {
  elements = {
    usernameDropdown: () => cy.get("#username"),
    passwordDropdown: () => cy.get("#password"),
    loginButton: () => cy.get("#login-btn"),
    signedInUsername: () => cy.get("span.username"),
  };

  visit() {
    super.visit("/signin");
  }

  openUsernameDropdown() {
    this.elements.usernameDropdown().click();
  }

  chooseUsername(username) {
    this.elements.usernameDropdown().type(username);
    cy.get("body").type("{enter}");
  }

  openPasswordDropdown() {
    this.elements.passwordDropdown().click();
  }

  choosePassword(password) {
    this.elements.passwordDropdown().type(password);
    cy.get("body").type("{enter}");
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  login(username, password) {
    this.openUsernameDropdown();
    this.chooseUsername(username);
    this.openPasswordDropdown();
    this.choosePassword(password);
    this.clickLogin();
  }

  verifyLoggedInUser(username) {
    this.elements.signedInUsername().should("have.text", username);
  }
}

module.exports = new SignInPage();
