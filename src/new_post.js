"use strict";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('This confirms a new post has been added' + this.state.value);
    event.preventDefault();
    fetch('/posts', {
       method: "POST",
       headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(this.state),
    });
    this.setState({value: ""})
  }

  // componentDidMount = () => {
  //   fetch(`/posts/viewlikes/${this.props.postId}`)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({ likes: responseJson.likes });
  //     });
  // };

    // next steps:
    // the new post is displayed with the other posts from the database.
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea rows="4" cols="50" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="New Post" />
      </form>
    );
  }
}

// in order to render the like button for all posts, we must iterate through all instances of the element
const domContainer = document.querySelector(".new-post-container")
ReactDOM.render(<NewPost />, domContainer);

