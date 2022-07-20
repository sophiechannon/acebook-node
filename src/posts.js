"use strict";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
    console.log(this.state)
  }

  componentDidMount = () => {
    console.log(this.state)
    fetch(`/posts/getposts`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          body: responseJson
      });
      });
    console.log(this.state)
  };

  render() {
    if (this.state != null) {
      return (
        <ul>
        {this.state.body.posts.map(post => (
          <li key={post._id}> {post.firstname}, {post.message}, Created at: {post.createdAt} </li>
        ))}
      </ul>
      )
    }
  }
}

// in order to render the like button for all posts, we must iterate through all instances of the element
const domContainer = document.querySelector(".posts-container")
ReactDOM.render(<Posts />, domContainer);