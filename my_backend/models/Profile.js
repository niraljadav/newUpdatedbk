const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  image: {
    data: Buffer,
    contentType: String
  },
  DOB: {
    type: Date,
    default: Date.now
  },
  country: {
    type: String
  },
  social: {
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);