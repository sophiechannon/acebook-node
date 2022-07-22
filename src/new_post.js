"use strict";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      body: { comments: [] },
      comments: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
    // this.fetchData();
  };
  // new route for direct access to comments table
  fetchData() {
    fetch(`/posts/getcomments?postID=${this.props.postId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          comments: responseJson.comments,
        });
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(
      "This confirms a new comment has been added:" + this.state.value
    );

    event.preventDefault();
    fetch(`/posts/comments/${this.props.postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newComment: this.state.value }),
    }).then(() => this.fetchData());
    this.setState({ value: "" });
  }

  render() {
    return (
      <div class="all-comments">
        <form onSubmit={this.handleSubmit}>
          <textarea
            rows="2"
            cols="30"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="New Comment" />
        </form>
        <ul className="comments">
          {this.state.comments.map((comment) => (
            <li key={comment._id}>{comment.commentMessage}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <button class="like-button" onClick={this.addLike}>
        Likes: {this.state.likes}
      </button>
    );
  }
}

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      body: { posts: [] },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.fetchData();
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  fetchData() {
    fetch(`/posts/getposts`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          body: responseJson,
        });
      });
  }

  removePost(postId, e) {
    e.preventDefault;
    fetch(`/posts/deletepost/${postId}`, {
      method: "DELETE",
    }).then(() => this.fetchData());
  }

  handleSubmit(event) {
    console.log("This confirms a new post has been added:" + this.state.value);
    event.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(() => this.fetchData());
    this.setState({ value: "" });
  }

  render() {
    return (
      <div class="all-posts">
        <form onSubmit={this.handleSubmit}>
          <textarea
            rows="4"
            cols="50"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="New Post" />
        </form>
        <ul>
          {this.state.body.posts.map((post) => (
            <li key={post._id}>
              <div class="post-author"> {post.firstname} </div>
              <div class="post-date"> Created at: {post.createdAt} </div>
              <div class="post-text"> {post.message} </div>
              <button
                className="delete-button"
                onClick={(e) => this.removePost(post._id, e)}
              >
                Delete
              </button>
              <LikeButton postId={post._id} />
              <Comments postId={post._id} comments={post.comments} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const domContainer = document.querySelector(".new-post-container");
ReactDOM.render(<NewPost />, domContainer);
