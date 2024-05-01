const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoURI =
  "mongodb+srv://webdev2:webdev2@cluster1.ugvyl6x.mongodb.net/MovieList?retryWrites=true&w=majority&appName=Cluster1";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected to MovieList Database"))
  .catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
});

// Create a Model connected to 'movies' collection in the 'MovieList' database
const Movie = mongoose.model("Movie", movieSchema, "movies");

// const movies = [
//   { title: "Whiplash", description: "Whiplash description", rating: 10},
//   { title: "Star Wars", description: "Star Wars description", rating: 8 },
// ];

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/movies", async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
  });

  try {
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app;
