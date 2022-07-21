"use strict";

class SignUpPage extends React.Component {
  render() {
    return (
      <div class="sign-up-form">
        <form class="sign-up" id="new-user-form" action="/users" method="post">
          <h2>
            <label htmlFor="firstname">First Name: </label>
            <input
              className="input-box"
              id="firstname"
              type="text"
              name="firstname"
              value=""
            />
          </h2>
          <h2>
            <label htmlFor="lastname">Last Name: </label>
            <input
              className="input-box"
              id="lastname"
              type="text"
              name="lastname"
              value=""
            />
          </h2>
          <h2>
            <label htmlFor="email">Email: </label>
            <input
              className="input-box"
              id="email"
              type="email"
              name="email"
              value=""
            />
          </h2>
          <h2>
            <label htmlFor="password">Password: </label>
            <input
              className="input-box"
              id="password"
              type="password"
              name="password"
              value=""
            />
          </h2>
          <input
            className="input-submit"
            id="submit"
            type="submit"
            value="Submit"
          ></input>
        </form>
      </div>
    );
  }
}

// in order to render the like button for all posts, we must iterate through all instances of the element
document.querySelectorAll("#signup-page").forEach((domContainer) => {
  ReactDOM.render(<SignUpPage />, domContainer);
});
