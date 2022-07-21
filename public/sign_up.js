"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpPage = function (_React$Component) {
  _inherits(SignUpPage, _React$Component);

  function SignUpPage() {
    _classCallCheck(this, SignUpPage);

    return _possibleConstructorReturn(this, (SignUpPage.__proto__ || Object.getPrototypeOf(SignUpPage)).apply(this, arguments));
  }

  _createClass(SignUpPage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "sign-up-form" },
        React.createElement(
          "form",
          { "class": "sign-up", id: "new-user-form", action: "/users", method: "post" },
          React.createElement(
            "h2",
            null,
            React.createElement(
              "label",
              { htmlFor: "firstname" },
              "First Name: "
            ),
            React.createElement("input", {
              className: "input-box",
              id: "firstname",
              type: "text",
              name: "firstname",
              value: ""
            })
          ),
          React.createElement(
            "h2",
            null,
            React.createElement(
              "label",
              { htmlFor: "lastname" },
              "Last Name: "
            ),
            React.createElement("input", {
              className: "input-box",
              id: "lastname",
              type: "text",
              name: "lastname",
              value: ""
            })
          ),
          React.createElement(
            "h2",
            null,
            React.createElement(
              "label",
              { htmlFor: "email" },
              "Email: "
            ),
            React.createElement("input", {
              className: "input-box",
              id: "email",
              type: "email",
              name: "email",
              value: ""
            })
          ),
          React.createElement(
            "h2",
            null,
            React.createElement(
              "label",
              { htmlFor: "password" },
              "Password: "
            ),
            React.createElement("input", {
              className: "input-box",
              id: "password",
              type: "password",
              name: "password",
              value: ""
            })
          ),
          React.createElement("input", {
            className: "input-submit",
            id: "submit",
            type: "submit",
            value: "Submit"
          })
        )
      );
    }
  }]);

  return SignUpPage;
}(React.Component);

// in order to render the like button for all posts, we must iterate through all instances of the element


document.querySelectorAll("#signup-page").forEach(function (domContainer) {
  ReactDOM.render(React.createElement(SignUpPage, null), domContainer);
});