import { signUp, signIn } from "./web_helpers";

describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    // sign up
    signUp();

    // sign in
    signIn();


  });
});
