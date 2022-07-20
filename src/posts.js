"use strict";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
    console.log(this.state)
  }

  componentDidMount = () => {
    fetch(`/posts/getposts`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          responseJson
        });
      });
  };

  render() {
    if (this.state != null) {
      return (
        <ul>
        {this.state.posts.map(post => (
          <li class="individual-post" key={post.id}>{post.firstname}</li>
        ))}
      </ul>
      )
    }
  }
}

// in order to render the like button for all posts, we must iterate through all instances of the element
const domContainer = document.querySelector(".posts-container")
ReactDOM.render(<Posts />, domContainer);