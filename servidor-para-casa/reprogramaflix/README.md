# {reprograma}flix
API apresentada ao curso online de back-end da {reprograma}. <br>
Tema da semana: "Métodos HTTP: PUT + PATCH".

## documentação

### demandas de negocio
- devo conseguir ver todos as séries
- devo conseguir uma série especifica
- devo conseguir deletar uma série
- devo conseguir adicionar nova série
- devo conseguir atualizar uma série
- devo conseguir atualizar titulo da série
- devo conseguir atualizar qualquer parte da série separadamente


### rotas

{GET}/series
mensagem inicial

{GET}/series/todos
ver todos as séries 

{GET}/series/:id
ver uma série especifica

{GET}/series/titulo
filtrar séries por título

{GET}/series/genero
filtrar séries por gênero

{DELETE}/series/apagar/:id
deletar uma série

{POST}/series/adicionar
adicionar nova série

dados esperados:
{
"id": automático,
"title": String,
"totalSeasons": String,
"genre": Array (de Strings),
"writers": Array (de Strings),
"poster": String (link),
"actors": Array (de Strings),
"ratings": Object
}


{PUT}/series/atualizar/serie:id
atualizar uma série

{PATCH}/series/atualizar/titulo/:id
atualizar titulo da série

{PATCH}/series/atualizar/:id
atualizar qualquer parte separadamente