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

    _this.componentDidMount = function () {
      console.log(_this.state);
      fetch('/posts/getposts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        _this.setState({
          body: responseJson
        });
      });
      console.log(_this.state);
    };

    _this.state = null;
    console.log(_this.state);
    return _this;
  }

  _createClass(Posts, [{
    key: 'render',
    value: function render() {
      if (this.state != null) {
        return React.createElement(
          'ul',
          null,
          this.state.body.posts.map(function (post) {
            return React.createElement(
              'li',
              { key: post._id },
              ' ',
              post.firstname,
              ', ',
              post.message,
              ', Created at: ',
              post.createdAt,
              ' '
            );
          })
        );
      }
    }
  }]);

  return Posts;
}(React.Component);

// in order to render the like button for all posts, we must iterate through all instances of the element


var domContainer = document.querySelector(".posts-container");
ReactDOM.render(React.createElement(Posts, null), domContainer);