"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_React$Component) {
  _inherits(Posts, _React$Component);

  function Posts(props) {
    _classCallCheck(this, Posts);

    var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

    console.log(props);
    _this.state = { postText: null };
    return _this;
  }

  // addLike = () => {
  //   let newCount = this.state.likes + 1;
  //   this.setState({
  //     likes: newCount,
  //   });
  //   fetch(`/posts/updatelikes/${this.props.postId}`, {
  //     method: "POST",
  //   });
  // };

  // componentDidMount = () => {
  //   fetch(`/posts/viewlikes/${this.props.postId}`)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({ likes: responseJson.likes });
  //     });
  // };

  _createClass(Posts, [{
    key: "handleChange",
    value: function handleChange() {
      // next steps:
      // when you add a post, it displays on the page
      // when you add a post, it goes to the database
      // the new post is displayed with the other posts from the database.
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement("textarea", { rows: "4", cols: "50", value: this.state.value, onChange: this.handleChange }),
        React.createElement("input", { type: "submit", value: "New Post" })
      );
    }
  }]);

  return Posts;
}(React.Component);

// in order to render the like button for all posts, we must iterate through all instances of the element


var domContainer = document.querySelector(".new-post-container");
ReactDOM.render(React.createElement(Posts, null), domContainer);