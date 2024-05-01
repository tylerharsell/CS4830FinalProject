const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    review: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
