# to-do list {reprograma}
API apresentada ao curso online de back-end da {reprograma}.
Tema da semana: "Métodos HTTP: PUT + PATCH".

## documentação

### demandas de negocio
- devo conseguir ver todas as tarefas
- devo conseguir uma tarefa especifica
- devo conseguir deletar uma tarefa
- devo conseguir adicionar nova tarefa
- devo conseguir atualizar uma tarefa
- devo conseguir atualizar apenas se uma tarefa foi concluída
- devo conseguir atualizar qualquer parte da tarefa separadamente


### rotas

{GET}/
index de apresentação do projeto

{GET}/tarefas
ver todas as tarefas

{GET}/tarefas/:id
ver tarefa específica

{DELETE}/tarefas/apagar/:id
deletar uma tarefa

{POST}/tarefas/adicionar
adicionar nova tarefa

{PUT}/tarefas/atualizar/tarefa/:id
atualizar uma tarefa

dados esperados: {
    id: String,
    dataInclusao: automático,
    concluido: boolean,
    descricao: String,
    nomeColaborador: String
}

{PATCH}/tarefas/atualizar/titulo/:id
atualizar apernas se uma tarefa foi concluída

{PATCH}/tarefas/atualizar/:id
atualizar qualquer parte da tarefa separadamente