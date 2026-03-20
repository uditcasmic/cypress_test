const signInPage = require("../pages/SignInPage");

describe("BrowserStack Demo sign in", () => {
  let validUser;

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      validUser = users.validUser;
    });
  });

  it("logs in with page object methods", () => {
    signInPage.visit();

    signInPage.login(validUser.username, validUser.password);
    signInPage.verifyLoggedInUser(validUser.username);
  });
});
