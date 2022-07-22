import { signUp, signIn, submitPost } from "./web_helpers";

describe("Timeline", () => {
  it("can like a post", () => {
    // sign up
    signUp();

    // sign in
    signIn();

    // submit a post
    submitPost();
    cy.get(".like-button-container").first().click();
    cy.get(".like-counter").first().should("contain", "1");
  });
});
