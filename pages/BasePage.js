class BasePage {
  visit(path = "") {
    cy.visit(path);
  }

  getBySelector(selector) {
    return cy.get(selector);
  }

  click(selector) {
    this.getBySelector(selector).click();
  }

  type(selector, value) {
    this.getBySelector(selector).type(value);
  }
}

module.exports = BasePage;
