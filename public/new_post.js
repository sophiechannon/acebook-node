"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPost = function (_React$Component) {
  _inherits(NewPost, _React$Component);

  function NewPost(props) {
    _classCallCheck(this, NewPost);

    var _this = _possibleConstructorReturn(this, (NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call(this, props));

    _this.componentDidMount = function () {
      _this.fetchData();
      console.log(_this.state);
    };

    _this.state = {
      value: "",
      body: { posts: [] }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(NewPost, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      fetch("/posts/getposts", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        _this2.setState({
          body: responseJson
        });
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log('This confirms a new post has been added:' + this.state.value);
      event.preventDefault();
      fetch('/posts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      this.setState({ value: "" });
      this.fetchData();
      console.log(this.state.body.posts);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "all-posts" },
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement("textarea", { rows: "4", cols: "50", value: this.state.value, onChange: this.handleChange }),
          React.createElement("input", { type: "submit", value: "New Post" })
        ),
        React.createElement(
          "ul",
          null,
          this.state.body.posts.map(function (post) {
            return React.createElement(
              "li",
              { key: post._id },
              React.createElement(
                "div",
                { "class": "post-author" },
                " ",
                post.firstname,
                " "
              ),
              React.createElement(
                "div",
                { "class": "post-date" },
                " Created at: ",
                post.createdAt,
                " "
              ),
              React.createElement(
                "div",
                { "class": "post-text" },
                " ",
                post.message,
                " "
              ),
              React.createElement(
                "ul",
                { className: "comments" },
                post.comments.map(function (comment) {
                  return React.createElement(
                    "li",
                    { key: comment._id },
                    console.log(comment.commentMessage),
                    comment.commentMessage
                  );
                })
              )
            );
          })
        )
      );
    }
  }]);

  return NewPost;
}(React.Component);

var domContainer = document.querySelector(".new-post-container");
ReactDOM.render(React.createElement(NewPost, null), domContainer);