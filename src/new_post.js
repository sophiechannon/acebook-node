"use strict";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('This confirms a new comment has been added:' + this.state.value);
    event.preventDefault();
    fetch(`/posts/comments/${this.props.postId}`, {
       method: "POST",
       headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(this.state),
    });
    this.setState({value: ""})
    this.fetchData();
  }

  render() {
    return (
      <div class="new-comments">
        <form onSubmit={this.handleSubmit}>
          <textarea rows="2" cols="30" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="New Comment" />
        </form>
      </div>
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { likes: null };
  }

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
    });
    // Retrieve Likes
    fetch(`/posts/updatelikes/${this.props.postId}`, {
      method: "POST",
    });
  };

  // lifecyle method
  componentDidMount = () => {
    fetch(`/posts/viewlikes/${this.props.postId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ likes: responseJson.likes });
      });
  };

  render() {
    return <button class="like-button" onClick={this.addLike}>Likes: {this.state.likes}</button>;
  }
}

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
      body: {posts: []}
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.fetchData()
    console.log(this.state)
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  fetchData() {
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
  }

  handleSubmit(event) {
    console.log('This confirms a new post has been added:' + this.state.value);
    event.preventDefault();
    fetch('/posts', {
       method: "POST",
       headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(this.state),
    });
    this.setState({value: ""})
    this.fetchData();
    console.log(this.state.body.posts)
  }

  render() {
    return (
      <div class="all-posts">
        <form onSubmit={this.handleSubmit}>
          <textarea rows="4" cols="50" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="New Post" />
        </form>
        <ul>
          {this.state.body.posts.map(post => (
            <li key={post._id}>
              <div class="post-author"> {post.firstname} </div><div class="post-date"> Created at: {post.createdAt} </div>
              <div class="post-text"> {post.message} </div>
              <LikeButton postId={post._id} />
              <Comments postId={post._id} />
              <ul className="comments">{post.comments.map(comment => (
                 <li key={comment._id}>
                  {console.log(comment.commentMessage)}
                  {comment.commentMessage}
                 </li>
              )
              )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const domContainer = document.querySelector(".new-post-container")
ReactDOM.render(<NewPost />, domContainer);

