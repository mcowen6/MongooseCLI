const mongoose = require("mongoose");
const { string } = require("yargs");

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
    default: "Not specified",
  },
});

const MovieCollection = mongoose.model("Movies", movieSchema);

module.exports = MovieCollection;
