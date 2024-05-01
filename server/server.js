const MovieModel = require('./models/MovieModel');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let posts = [{ id: 1, content: 'Hello World!' }];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const post = { id: posts.length + 1, content: req.body.content };
  posts.push(post);
  res.status(201).json(post);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


mongoose
    .connect(
        "mongodb+srv://admin:2830Password@mattcluster.5pix0hp.mongodb.net/MOM-API?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(4000, () => {
            console.log(`MOM API is running on port 4000`);
        });
        console.log("connected to MongoDB");
    })
    .catch(() => {
        console.log(error);
    });