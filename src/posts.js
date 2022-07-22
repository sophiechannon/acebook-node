"use strict";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: {posts: []}
     };
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
    <><ul>
      <NewPost />
      {this.state.body.posts.map(post => (
        <li key={post._id}>
          <div class="post-author"> {post.firstname} </div><div class="post-date"> Created at: {post.createdAt} </div>
          <div class="post-text"> {post.message} </div>
          <LikeButton postId={post_id} />
          <ul className="comments">{post.comments.map(comment => (
            <li key={comment._id}>
              {console.log(comment.commentMessage)}
              {comment.commentMessage}
            </li>
          ))}
          </ul>
        </li>
      ))}
    </ul></>
  }
}

// in order to render the like button for all posts, we must iterate through all instances of the element
const domContainer = document.querySelector(".posts-container")
ReactDOM.render(<Posts />, domContainer);
