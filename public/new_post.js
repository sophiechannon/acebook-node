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

    console.log(props);
    _this.state = { likes: null };
    return _this;
  }

  // addPost = () => {
  //   let newCount = this.state.likes + 1;
  //   this.setState({
  //     likes: newCount,
  //   });
  //   // Retrieve Likes
  //   fetch(`/posts/updatelikes/${this.props.postId}`, {
  //     method: "POST",
  //   });
  // };

  // lifecyle method
  // componentDidMount = () => {
  //   fetch(`/posts/viewlikes/${this.props.postId}`)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({ likes: responseJson.likes });
  //     });
  // };

  _createClass(NewPost, [{
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

  return NewPost;
}(React.Component);

// in order to render the like button for all posts, we must iterate through all instances of the element


document.querySelectorAll(".like-button-container").forEach(function (domContainer) {
  ReactDOM.render(React.createElement(LikeButton, domContainer.dataset), domContainer);
});