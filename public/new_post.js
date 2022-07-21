"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments(props) {
    _classCallCheck(this, Comments);

    var _this = _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, props));

    _this.state = {
      value: ""
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Comments, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log('This confirms a new comment has been added:' + this.state.value);
      event.preventDefault();
      fetch("/posts/comments/" + this.props.postId, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      this.setState({ value: "" });
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "new-comments" },
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement("textarea", { rows: "2", cols: "30", value: this.state.value, onChange: this.handleChange }),
          React.createElement("input", { type: "submit", value: "New Comment" })
        )
      );
    }
  }]);

  return Comments;
}(React.Component);

var LikeButton = function (_React$Component2) {
  _inherits(LikeButton, _React$Component2);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this2 = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this2.addLike = function () {
      var newCount = _this2.state.likes + 1;
      _this2.setState({
        likes: newCount
      });
      // Retrieve Likes
      fetch("/posts/updatelikes/" + _this2.props.postId, {
        method: "POST"
      });
    };

    _this2.componentDidMount = function () {
      fetch("/posts/viewlikes/" + _this2.props.postId).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        _this2.setState({ likes: responseJson.likes });
      });
    };

    console.log(props);
    _this2.state = { likes: null };
    return _this2;
  }

  // lifecyle method


  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { "class": "like-button", onClick: this.addLike },
        "Likes: ",
        this.state.likes
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var NewPost = function (_React$Component3) {
  _inherits(NewPost, _React$Component3);

  function NewPost(props) {
    _classCallCheck(this, NewPost);

    var _this3 = _possibleConstructorReturn(this, (NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call(this, props));

    _this3.componentDidMount = function () {
      _this3.fetchData();
      console.log(_this3.state);
    };

    _this3.state = {
      value: "",
      body: { posts: [] }
    };

    _this3.handleChange = _this3.handleChange.bind(_this3);
    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(NewPost, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this4 = this;

      fetch("/posts/getposts", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        _this4.setState({
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
              React.createElement(LikeButton, { postId: post._id }),
              React.createElement(Comments, { postId: post._id }),
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