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