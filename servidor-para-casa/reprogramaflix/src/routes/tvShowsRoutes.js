const express = require("express");
const controller = require("../controllers/tvShowsControllers");

const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.delete("/apagar/:id", controller.deleteByID);
router.post("/adicionar", controller.postShow);
router.put("/atualizar/serie/:id", controller.putShowByID);
router.patch("/atualizar/titulo/:id", controller.patchTitleByID);
router.patch("/atualizar/:id", controller.patchAnythingByID);
router.get("/:id", controller.getByID);

module.exports = router;
