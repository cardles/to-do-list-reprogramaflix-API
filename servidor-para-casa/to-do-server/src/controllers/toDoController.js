const { request, response } = require("express");
const tasksJSON = require("../models/tarefas.json");
const fs = require("fs");



const getAll = (request, response) => {

    response.status(200).send({
        "message": "Essas são todas as tarefas disponíveis:",
        tasksJSON
    });
};


const getByID = (request, response) => {

    const requestedID = request.params.id;
    const taskFound = tasksJSON.find(tarefa => tarefa.id == requestedID);

    response.status(200).send({
        "message": `Essa é a tarefa que corresponde ao id ${requestedID}:`,
        taskFound
    });
};


const deleteByID = (request, response) => {

    const requestedID = request.params.id;
    const taskFound = tasksJSON.find(tarefa => tarefa.id == requestedID);
    const index = tasksJSON.indexOf(taskFound);

    if(taskFound) {
        tasksJSON.splice(index, 1);

        response.status(200).json([{
            "message": "A tarefa foi deletada com sucesso! Visualize abaixo a lista de tarefas atualizada:",
            tasksJSON
        }]);

        fs.writeFile("./src/models/tarefas.json", JSON.stringify(tasksJSON), 'utf8', (err) => {
            if(err) {
                return response.status(424).send({"message": err})
            };
        });
    };
};


const postTask = (request, response) => {

    const body = request.body;

    let newTask = {
        "id": Math.random().toString(32).substr(2, 9),
        "dataInclusao": new Date(),
        "concluido": false,
        "descricao": body.descricao,
        "nomeColaborador": body.nomeColaborador
    };

    tasksJSON.push(newTask);

    response.status(201).send({
        "message": "Nova tarefa adicionada com sucesso! Visualize abaixo a lista de tarefas atualizada:",
        tasksJSON
    });

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tasksJSON), 'utf8', (err) => {
        if(err) {
            return response.status(424).send({"message": err})
        };
    });

};


const putTaskByID = (request, response) => {

    const requestedID = request.params.id;
    const taskFound = tasksJSON.find(task => task.id == requestedID);
    const body = request.body;

    let updatedTask = {
        "id": taskFound.id,
        "dataInclusao": new Date(),
        "concluido": body.concluido,
        "descricao": body.descricao,
        "nomeColaborador": body.nomeColaborador
    };

    let index = tasksJSON.indexOf(taskFound);

    tasksJSON.splice(index, 1, body);

    response.status(200).send({
        "message": "A tarefa foi atualizada com sucesso! Visualize abaixo:",
        updatedTask
    });

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tasksJSON), 'utf8', (err) => {
        if(err) {
            return response.status(424).send({"message": err})
        };
    });
};


const patchStatusByID = (request, response) => {

    const requestedID = request.params.id;
    const taskFound = tasksJSON.find(task => task.id == requestedID);
    let newStatus = request.body.concluido;

    taskFound.concluido = newStatus;

    response.status(200).send({
        "message": "O status da tarefa foi atualizado com sucesso! Visualize abaixo:",
        taskFound
    });

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tasksJSON), 'utf8', (err) => {
        if(err) {
            return response.status(424).send({"message": err})
        };
    });
};


const patchAnythingByID = (request, response) => {

    const requestedID = request.params.id;
    const taskFound = tasksJSON.find(task => task.id == requestedID);
    const body = request.body;

    let keysFromBody = Object.keys(body);

    keysFromBody.forEach(keyFromBody => {
        if(taskFound[keyFromBody]) {

            taskFound[keyFromBody] = body[keyFromBody];

            response.status(200).send({
                "message": "A seção da tarefa foi atualizada com sucesso! Visualize abaixo:",
                taskFound
            });

            fs.writeFile("./src/models/tarefas.json", JSON.stringify(tasksJSON), 'utf8', (err) => {
                if(err) {
                    return response.status(424).send({"message": err})
                };
            });
        };
    });
};

module.exports = {
    getAll,
    getByID,
    deleteByID,
    postTask,
    putTaskByID,
    patchStatusByID,
    patchAnythingByID
};