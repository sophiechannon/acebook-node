const Comment = require("../models/comment");
const Post = require("../models/post");

const CommentsController = {
  ViewComments: async (req, res) => {
    const id = req.query.postID;
    const post = await Post.findById(id).populate("comments");
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        comments: post.comments,
      })
    );
  },

  CreateReact: async (req, res) => {
    const id = req.params.id;
    req.body = {
      commentMessage: req.body.newComment,
      post: id,
    };
    const comment = new Comment(req.body);
    await comment.save();
    const postRelated = await Post.findById(id);
    postRelated.comments.push(comment);
    await postRelated.save(res.send(""));
  },
};

module.exports = CommentsController;
