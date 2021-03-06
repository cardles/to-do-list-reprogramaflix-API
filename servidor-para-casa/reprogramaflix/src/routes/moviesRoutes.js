const controller = require("../controllers/moviesControllers");
const express = require("express");

const router = express.Router();

router.get("/", controller.home);
router.get("/todos", controller.getAll);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre);
router.delete("/apagar/:id", controller.deleteByID);
router.post("/adicionar", controller.postMovie);
router.put("/atualizar/filme/:id", controller.putMovieByID);
router.patch("/atualizar/titulo/:id", controller.patchTitleByID);
router.patch("/atualizar/:id", controller.patchAnythingByID);
router.get("/:id", controller.getByID);

module.exports = router;