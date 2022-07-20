"use strict";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { postText: null };
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

  handleChange() {
    // next steps:
    // when you add a post, it displays on the page
    // when you add a post, it goes to the database
    // the new post is displayed with the other posts from the database.
  }

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

