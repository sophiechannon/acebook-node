// above code not necessary as we are testing an nvalid email

describe("Registration", () => {
  it("A user signs up and is redirected to sign in", () => {
    // sign up

    cy.visit("/users/new");
    cy.get("#firstname").type("Mongo");
    cy.get("#lastname").type("Goose");
    cy.get("#email").type("someone@example");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.get(".email-error").should("have.text", "INVALID EMAIL");
  });
});

