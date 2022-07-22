const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");
const CommentsController = require("../controllers/comments");

router.get("/", PostsController.Index);
router.get("/getposts", PostsController.ViewPosts);
router.get("/getcomments", CommentsController.ViewComments);
router.post("/", PostsController.CreateReact);
router.get("/new", PostsController.New);
router.post("/comments/:id", CommentsController.CreateReact);
router.get("/viewlikes/:id", PostsController.ViewLikeReact);
router.post("/updatelikes/:id", PostsController.UpdateLikeReact);
router.delete("/deletepost/:id", PostsController.DeleteReact);

module.exports = router;
