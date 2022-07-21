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