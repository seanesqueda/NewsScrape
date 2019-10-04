var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var ArticleSchema = new Schema({
  // `Title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `Summary` is required and of type String
  summary: {
      type: String,
      required: true
  },
  // `Link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // `Comment` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated comment
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
