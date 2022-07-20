"use strict";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { likes: null };
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

  render() {
    return ( 
    <form>
    <textarea id="new-post" name="new-post" rows="4" cols="50"></textarea><br>
    <input type="submit" value="New post">
  </form>
  );
  }
}


const domContainer = document.querySelector(".new-post-container")
  ReactDOM.render(<LikeButton />, domContainer);