import { signUp, signIn, submitPost, submitComment } from "./web_helpers";

describe("Timeline", () => {
  it("can add a comment to a post", () => {
    // sign up
    signUp();

    // sign in
    signIn();

    // submit a post
    submitPost();

    // submit a comment
    submitComment();

    //add the comment to the newest post
    // cy.visit("/posts");
    // cy.get("#new-comment-form")
    //   .first()
    //   .type("Example comment from Cypress Testing");
    // cy.get(".comment-button").first().click();
    // cy.get(".posts")
    //   .first()
    //   .get(".comment-message-text")
    //   .last()
    //   .should("have.text", "Example comment from Cypress Testing");
  });
});
