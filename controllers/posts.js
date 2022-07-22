const Post = require("../models/post");

const PostsController = {
  Index: async (req, res) => {
    res.render("posts/index");
  },
  ViewPosts: async (req, res) => {
    const posts = await Post.find((err, posts) => {
      if (err) {
        throw err;
      }
    }).populate("comments");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ 
      posts: posts.reverse()}));
  },
  New: (req, res) => {
    res.render("posts/new", {});
  },
  CreateReact: (req, res) => {
    req.body = {
      createdAt: req.body.createdAt,
      message: req.body.value,
      firstname: req.session.user.firstname,
      likes: 0,
      comments: [],
    };
    const post = new Post(req.body);
    post.save((err) => {
      if (err) {
        throw err;
      }
      res.send("")
    });
  },
  DeleteReact: (req, res) => {
    Post.findOneAndDelete({ _id: req.params.id }).exec(function (err) {
      if (err) {
        console.log(err);
      }
      res.send("")
    });
  },

  ViewLikeReact: (req, res) => {
    Post.findOne({ _id: req.params.id }, function (err, post) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ id: post._id, likes: post.likes }));
    });
  },
  UpdateLikeReact: (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } }).exec(
      function (err) {
        if (err) {
          console.log(err);
        }
        res.send("")
      }
    );
  },
};

module.exports = PostsController;
