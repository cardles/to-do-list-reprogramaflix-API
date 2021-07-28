const express = require("express");
const controller = require("../controllers/toDoController");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getByID);
router.post("/adicionar", controller.postTask);
router.delete("/apagar/:id", controller.deleteByID);
router.put("/atualizar/tarefa/:id", controller.putTaskByID);
router.patch("/atualizar/status/:id", controller.patchStatusByID);
router.patch("/atualizar/:id", controller.patchAnythingByID);

module.exports = router;