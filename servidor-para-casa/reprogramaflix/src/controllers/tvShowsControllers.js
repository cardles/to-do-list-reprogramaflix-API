const tvShowsJSON = require("../models/series.json");



const home = (req, res) => {

    res.status(200).send({
        "title": "{reprograma}flix",
        "message": "Seja bem-vinda à nossa API!",
        "version": "1.0.0",
        "searchRules": "Por favor, verifique nossa documentação para utilizar nossas ferramentas corretamente.",
        "status": "Você está na seção de séries."
    });
};


const getAll = (req, res) => {

    res.status(200).send({
        "message": "Essas são todas as séries disponíveis:",
        tvShowsJSON
    });
};


const getByTitle = (req, res) => {

    const requestedTitle = req.query.title;
    const showFound = tvShowsJSON.filter((show) => show.title.toLocaleLowerCase().includes(requestedTitle.toLocaleLowerCase()));

    res.status(200).send({
        "message": "Esses são os títulos de séries encontrados:",
        showFound
    });
};


const getByGenre = (req, res) => {

    const requestedGenre = req.query.genre;

    // cria uma array para abrirgar os objetos "show" que correspondem ao "if"
    let showList = [];
    
    // comparar todos os itens da lista que são daquele gênero
    tvShowsJSON.forEach(show => {
        // "show" é cada objeto do arquivo JSON, apresentando todos
        // "genreArray" pega todos os "genre" (em forma de array) dos objetos

        let genreList = show.genre;

        // "stringGenre" apresenta cada elemento de string de cada array, separando-os e tirando-os da array
        for (stringGenre of genreList) {
            if (stringGenre.toLowerCase().includes(requestedGenre.toLowerCase())) {
                showList.push(show) // "show" corresponde ao objeto completo que tem o parametro de if = true
            };
        };
    });

    res.status(200).send({
        "message": "Essas são as séries encontradas desse gênero:",
        showList
    });
};


const deleteByID = (req, res) => {

    const requestedID = req.params.id;
    const findShow = showID => showID.id == requestedID;
    const showFound = tvShowsJSON.find(findShow);
    const index = tvShowsJSON.indexOf(showFound);
    
    if(showFound) {
        tvShowsJSON.splice(index, 1);

        res.status(200).send({
            "message": "A série foi deletada com sucesso! Visualize abaixo a lista de séries atualizada:",
            tvShowsJSON
        });

    } else {
        res.status(424).send({
            "message": "Série não encontrada, favor tentar novamente."
        });
    };
};


const postShow = (req, res) => {

    const body = req.body;

    let newShow = {
        "id": Math.random().toString(32).substr(2, 6),
        "title": body.title,
        "totalSeasons": body.totalSeasons,
        "genre": body.genre,
        "writers": body.writers,
        "poster": body.poster,
        "actors": body.actors,
        "ratings": body.ratings
    };

    tvShowsJSON.push(newShow);

    res.status(201).send({
        "message": "Nova série adicionada com sucesso! Visualize abaixo a lista de séries atualizada:",
        tvShowsJSON
    });
};


const putShowByID = (req, res) => {

    const requestedID = req.params.id;
    const body = req.body;
    const showFound = tvShowsJSON.find(show => show.id == requestedID);

    let updatedShow = {
        "id": showFound.id,
        "title": body.title,
        "totalSeasons": body.totalSeasons,
        "genre": body.genre,
        "writers": body.writers,
        "poster": body.poster,
        "actors": body.actors,
        "ratings": body.ratings
    };

    let index = tvShowsJSON.indexOf(showFound);

    tvShowsJSON.splice(index, 1, body);

    res.status(200).send({
        "message": "A série foi atualizada com sucesso! Visualize abaixo:",
        updatedShow,
    });
};


const patchTitleByID = (req, res) => {

    const requestedID = req.params.id;
    const newTitle = req.body.title;
    const showFound = tvShowsJSON.find(show => show.id == requestedID);

    showFound.title = newTitle;

    res.status(200).send({
        "message": "O título da série foi atualizado com sucesso! Visualize abaixo:",
        showFound
    });
};


const patchAnythingByID = (req, res) => {

    const requestedID = req.params.id;
    const body = req.body;
    const objectFound = tvShowsJSON.find(show => show.id == requestedID);

    // busca as chaves passadas em body e agrupa elas em uma array ["", ""]
    let objectKeys = Object.keys(body);

    objectKeys.forEach((chave) => {
        // buscar chave e valor e reatribuir eles pelas infos passadas em body
        objectFound[chave] = body[chave]
    });

    res.status(200).send({
        "message": "A seção da série foi atualizada com sucesso! Visualize abaixo:",
        objectFound
    });
};


const getByID = (req, res) => {

    const requestedID = req.params.id;
    const findID = (show) => show.id == requestedID;
    const showFound = tvShowsJSON.filter(findID);

    res.status(200).send({
        "message": `Essa é a série que corresponde ao id ${requestedID}:`,
        showFound});
};


module.exports = {
    home,
    getAll,
    getByTitle,
    getByGenre,
    deleteByID,
    postShow,
    putShowByID,
    patchTitleByID,
    patchAnythingByID,
    getByID
};