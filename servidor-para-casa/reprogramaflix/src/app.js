const express = require("express");
const app = express(); 
const cors = require("cors");

const movies = require("./routes/moviesRoutes");
const tvShows = require("./routes/tvShowsRoutes");

app.use(cors());
app.use(express.json());

app.use("/filmes", movies);
app.use("/series", tvShows);

module.exports = app;