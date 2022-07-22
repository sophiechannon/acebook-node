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

    _this.componentDidMount = function () {
      _this.fetchData();
    };

    _this.state = {
      value: "",
      body: { comments: [] }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Comments, [{
    key: "fetchData",

    // new route for direct access to comments table
    value: function fetchData() {
      var _this2 = this;

      fetch("/posts/getcomments", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
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
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log("This confirms a new comment has been added:" + this.state.value);
      event.preventDefault();
      fetch("/posts/comments/" + this.props.postId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      });
      this.setState({ value: "" });
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "all-comments" },
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "div",
            null,
            React.createElement("textarea", {
              rows: "2",
              cols: "30",
              value: this.state.value,
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("input", { type: "submit", value: "New Comment" })
          )
        ),
        React.createElement(
          "ul",
          { className: "comments" },
          this.state.body.comments.filter(function (comment) {
            return comment.post == _this3.props.postId;
          }).map(function (filteredComment) {
            return React.createElement(
              "li",
              { className: "comment", key: filteredComment._id },
              filteredComment.commentMessage
            );
          })
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

    var _this4 = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this4.addLike = function () {
      var newCount = _this4.state.likes + 1;
      _this4.setState({
        likes: newCount
      });
      // Retrieve Likes
      fetch("/posts/updatelikes/" + _this4.props.postId, {
        method: "POST"
      });
    };

    _this4.componentDidMount = function () {
      fetch("/posts/viewlikes/" + _this4.props.postId).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        _this4.setState({ likes: responseJson.likes });
      });
    };

    _this4.state = { likes: null };
    return _this4;
  }

  // lifecyle method


  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { className: "like-button", onClick: this.addLike },
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

    var _this5 = _possibleConstructorReturn(this, (NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call(this, props));

    _this5.componentDidMount = function () {
      _this5.fetchData();
    };

    _this5.state = {
      value: "",
      body: { posts: [] }
    };

    _this5.handleChange = _this5.handleChange.bind(_this5);
    _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
    return _this5;
  }

  _createClass(NewPost, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this6 = this;

      fetch("/posts/getposts", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        _this6.setState({
          body: responseJson
        });
      });
    }
  }, {
    key: "removePost",
    value: function removePost(postId, e) {
      e.preventDefault;
      fetch("/posts/deletepost/" + postId, {
        method: "DELETE"
      }).then(this.fetchData());
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log("This confirms a new post has been added:" + this.state.value);
      event.preventDefault();
      fetch("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      });
      this.setState({ value: "" });
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return React.createElement(
        "div",
        { className: "all-posts" },
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "div",
            null,
            React.createElement("textarea", { className: "new-post-text",
              rows: "4",
              cols: "50",
              value: this.state.value,
              onChange: this.handleChange
            })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("input", { type: "submit", value: "New Post" })
          )
        ),
        React.createElement(
          "ul",
          { className: "posts" },
          this.state.body.posts.map(function (post) {
            return React.createElement(
              "li",
              { key: post._id, "class": "post" },
              React.createElement(
                "div",
                { className: "post-info" },
                React.createElement(
                  "div",
                  { className: "post-author" },
                  " ",
                  post.firstname,
                  " "
                ),
                React.createElement(
                  "div",
                  { className: "post-date" },
                  " Created at: ",
                  post.createdAt,
                  " "
                )
              ),
              React.createElement(
                "div",
                { className: "post-text" },
                " ",
                post.message,
                " "
              ),
              React.createElement(LikeButton, { postId: post._id }),
              React.createElement(
                "button",
                { className: "delete-button", onClick: function onClick(e) {
                    return _this7.removePost(post._id, e);
                  } },
                "Delete"
              ),
              React.createElement(Comments, { postId: post._id })
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