var mongoose = require("mongoose");

require("../mongodb_helper");
var Comment = require("../../models/comment");
// var Post = require("../../models/post");

describe("Comment model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.comments.drop(() => {
      done();
    });
  });

  it("has a comment", () => {
    var comment = new Comment({
      commentMessage: "another message"
    });
    expect(comment.commentMessage).toEqual("another message");
  });

  it("can list all comments", (done) => {
    Comment.find((err, comments) => {
      expect(err).toBeNull();
      expect(comments).toEqual([]);
      done();
    });
  });

  it("can save a comment", (done) => {
    var comment = new Comment({
      commentMessage: "another message",
    });

    comment.save((err) => {
      expect(err).toBeNull();

      Comment.find((err, comments) => {
        expect(err).toBeNull();

        expect(comments[0]).toMatchObject({
          commentMessage: "another message",
        });
        done();
      });
    });
  });
});