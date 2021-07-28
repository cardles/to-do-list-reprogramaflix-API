# documentação

## demandas de negocio
- devo conseguir ver todos os post
- devo conseguir um post especifico
- devo conseguir deletar post
- devo conseguir criar um post
- devo conseguir atualizar post
- devo conseguir atualizar titulo do post
- devo conseguir atualizar qualquer parte do post separadamente

## rotas

{GET}/posts
const getAll que retorna todos os posts

{GET}/posts/:id
const getByID para ver um post específico

{POST}/posts/create
const createPost para criar um post

dados esperados:
{
    "id": automático,
    "dataCriacao": automático,
    "titulo": string,
    "conteudo": string,
    "etiquetas": array
}

{DELETE}/posts/:id
const deletePost para deletar um post

{PUT}/posts/:id
const replacePost atualizar o post

{PATCH}/posts/updateTitle/:id
const updateTitle para atualizar o titulo do post

{PATCH}/posts/update/:id
const updateAnything para atualizar qualquer parte do post separadamente