const postsJson = require("../models/posts.json");


const getAll = (req, res) => {

    res.status(200).send(postsJson);
};


const getByID = (req, res) => {
    const requestedID = req.params.id;
    const finteredPost = postsJson.find(post => post.id == requestedID);

    res.status(200).send(finteredPost)
};


const createPost = (req, res) => {

    // acessar os dados enviados
    let requestedTitle = req.body.titulo;
    let requestedContent = req.body.conteudo;
    let requestedLabels = req.body.etiquetas;

    let newPost = {
        // criando ID automático
        "id": Math.random().toString(32).substr(2, 6),
        // criando data automática
        "dataCriacao": new Date(),
        "titulo": requestedTitle,
        "conteudo": requestedContent,
        "etiquetas": requestedLabels
    };

    postsJson.push(newPost);

    // enviar uma resposta
    res.status(201).send({
        "mensagem": "Post criando com sucesso",
        newPost
    });
};


// substituir todo o item da lista json
const replacePost = (req, res) => {

    // acessar dados da requisição
    let requestedID = req.params.id;
    const postFromBody = req.body;

    // encontrando por ID
    const filteredPost = postsJson.find(post => post.id == requestedID);

    let updatedPost = {
        "id": filteredPost.id,
        "dataCriacao": filteredPost.dataCriacao,
        "titulo": postFromBody.titulo,
        "conteudo": postFromBody.conteudo,
        "etiquetas": postFromBody.etiquetas
    };

    // pegando o indice da requisitcao
    const index = postsJson.indexOf(filteredPost);

    // substituir o item
    // splice(indice, quando elementos eu quero remover, o que é para adicionar)
    postsJson.splice(index, 1, postFromBody);

    // enviar resposta
    res.status(200).send({
        "mensagem": "post substituído com sucesso",
        updatedPost
    });
};


// atualizar o titulo
const updateTitle = (req, res) => {

    let requestedID = req.params.id;
    let newTitle = req.body.titulo;

    let filteredPost = postsJson.find(post => post.id == requestedID);

    // o titulo do post filtrada precisa ser igual ao que vem da requisicao
    filteredPost.titulo = newTitle;

    res.status(200).send({
        "mensagem": "Título atualizado com sucesso.",
        filteredPost
    });
};


// atualizar qualquer coisa
const updateAnything = (req, res) => {
    let requestedID = req.params.id;
    let updatedPost = req.body;
    let filteredPost = postsJson.find(post => post.id == requestedID);

    // pegar apenas nomes das chaves escritas no "body"
    let keyList = Object.keys(updatedPost);

    // percorrendo as chaves de um objeto
    keyList.forEach((chave) => {

        // chave do body = post filtrado
        postFiltrado[chave] = updatedPost; //reatribuição de valor
    });

    res.status(200).send({
        "message": "Post atualizado com sucesso",
        filteredPost
    });
};


module.exports= {
    getAll,
    getByID,
    createPost,
    replacePost,
    updateTitle,
    updateAnything
};