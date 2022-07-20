export function signUp() {
  cy.visit("/users/new");
  cy.get("#firstname").type("Mongo");
  cy.get("#lastname").type("Goose");
  cy.get("#email").type("someone@example.com");
  cy.get("#password").type("password");
  cy.get("#submit").click();
}

export function signIn() {
  cy.visit("/sessions/new");
  cy.get("#email").type("someone@example.com");
  cy.get("#password").type("password");
  cy.get("#submit").click();
}

export function submitPost() {
  cy.visit("/posts");
  cy.contains("New post").click();
  cy.get("#new-post-form")
    .find('[type="text"]')
    .type("Example Post from Cypress Testing");
  cy.get("#new-post-form").submit();
}

export function submitComment() {
  cy.visit("/posts");
  cy.get(":nth-child(6)").type("Example comment from Cypress Testing");
  cy.get(":nth-child(7)").click();
  cy.get(".posts")
    .first()
    .get(".comment-message-text")
    .last()
    .should("have.text", "Example comment from Cypress Testing");
  cy.get(".posts").should("contain", "Example Post from Cypress Testing");
}
