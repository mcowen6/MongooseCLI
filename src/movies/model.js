const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actor: {
    type: String,
    default: "Not specified",
  },
  director: {
    type: String,
    default: "Not specified",
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: "Not specified",
  },
});

const MovieCollection = mongoose.model("Movies", movieSchema);

module.exports = MovieCollection;
