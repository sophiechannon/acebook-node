const Comment = require("../models/comment");
const Post = require("../models/post");

const CommentsController = {
  ViewComments: async (req, res) => {
    const comments = await Comment.find((err, comments) => {
      if (err) {
        throw err;
      }
    });
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        comments: comments,
      })
    );
  },

  CreateReact: async (req, res) => {
    const id = req.params.id;
    req.body = {
      commentMessage: req.body.value,
      post: id,
    };
    const comment = new Comment(req.body);
    await comment.save();
    const postRelated = await Post.findById(id);
    postRelated.comments.push(comment);
    await postRelated.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
  },
};

module.exports = CommentsController;
