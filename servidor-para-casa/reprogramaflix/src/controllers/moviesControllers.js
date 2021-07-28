const moviesJSON = require("../models/filmes.json");



const home = (request, response) => {

    response.status(200).send(
        {
            "title": "{reprograma}flix",
            "message": "Seja bem-vinda à nossa API!",
            "version": "1.0.0",
            "searchRules": "Por favor, verifique nossa documentação para utilizar nossas ferramentas corretamente.",
            "status": "Você está na seção de filmes."
        });
};


const getAll = (request, response) => {

    response.status(200).send({
        "message": "Esses são todos os filmes disponíveis:",
        moviesJSON
    });
};


const getByTitle = (request, response) => {

    const requestedTitle = request.query.title;
    const movieFound = moviesJSON.find(movie => movie.title.toLowerCase().includes(requestedTitle.toLowerCase()));
    
    if (requestedTitle === "" || movieFound === undefined) {
        response.status(404).send({
            "message": "Por favor, insira um título válido."
        });

    } else {
        response.status(200).send({
            "message": "Esses são os títulos de filmes encontrados:",
            movieFound
        });
    };
};


const getByGenre = (request, response) => {

    const requestedGenre = request.query.genre;
    let movieList = [];
    
    moviesJSON.forEach(movie => {
        let genreList = movie.genre.split(",");
        
        for (genre of genreList) {
            if (genre.toLowerCase().includes(requestedGenre.toLowerCase())) {
                movieList.push(movie)
            }
        }; 
    });
    
    response.status(200).send({
        "message": "Esses são os filmes encontrados desse gênero:",
        movieList
    });
};


const deleteByID = (req, res) => {

    const requestedID = req.params.id;
    const movieFound = moviesJSON.find(movie => movie.id == requestedID);
    let index = moviesJSON.indexOf(movieFound);
    
    if (movieFound) {
        moviesJSON.splice(index, 1);

        res.status(200).send({
            "message": "O filme foi deletado com sucesso! Visualize abaixo a lista de filmes atualizada:",
            moviesJSON});

    } else {
        res.status(424).send({
            "message": "Filme não encontrado, favor tentar novamente."
        });
    };
};


const postMovie = (req, res) => {

    const body = req.body;
    
    let newMovie = {
        "id": Math.random().toString(32).substr(2, 6),
        "title": body.title,
        "year": body.year,
        "rated": body.rated,
        "released": body.released,
        "runtime": body.runtime,
        "genre": body.genre,
        "director": body.director,
        "writer": body.writer,
        "actors": body.actors,
        "plot": body.plot,
        "language": body.language,
        "country": body.country,
        "awards": body.awards
    };

    moviesJSON.push(newMovie);

    res.status(201).send({
        "message": "O filme foi adicionado com sucesso! Visualize abaixo a lista de filmes atualizada:",
        moviesJSON
    });
};


const putMovieByID = (req, res) => {

    const requestedID = req.params.id;
    const movieFound = moviesJSON.find(movie => movie.id == requestedID);
    const body = req.body;

    let updatedMovie = {
        "id": movieFound.id,
        "title": body.title,
        "year": body.year,
        "rated": body.rated,
        "released": body.released,
        "runtime": body.runtime,
        "genre": body.genre,
        "director": body.director,
        "writer": body.writer,
        "actors": body.actors,
        "plot": body.plot,
        "language": body.language,
        "country": body.country,
        "awards": body.awards
    };

    let index = moviesJSON.indexOf(movieFound);

    moviesJSON.splice(index, 1, body);

    res.status(200).send({
        "message": "O filme foi atualizado com sucesso! Visualize abaixo:",
        updatedMovie
    });
};


const patchTitleByID = (req, res) => {

    const requestedID = req.params.id;
    const movieFound = moviesJSON.find(movie => movie.id == requestedID);
    const newTitle = req.body.title;

    movieFound.title = newTitle;

    res.status(200).send({
        "message": "O título do filme foi atualizado com sucesso! Visualize abaixo:",
        movieFound
    });
};


const patchAnythingByID = (req, res) => {

    const requestedID = req.params.id;
    const objectFound = moviesJSON.find(movie => movie.id == requestedID);
    const body = req.body;

    let objectKeys = Object.keys(body);

    objectKeys.forEach(bodysKey => {
        objectFound[bodysKey] = body[bodysKey]
    });

    res.status(200).send({
        "message": "A seção do filme foi atualizada com sucesso! Visualize abaixo:",
        objectFound
    });
};


const getByID = (request, response) => {
    
    const requestedID = request.params.id;
    const filteredId = movies.find(movie => movie.id == requestedID);

    response.status(200).send({
        "message": `Esse é o filme que corresponde ao id ${requestedID}:`,
        filteredId
    });
};

module.exports = {
    home,
    getAll,
    getByTitle,
    getByGenre,
    deleteByID,
    postMovie,
    putMovieByID,
    patchTitleByID,
    patchAnythingByID,
    getByID
};