const express = require("express");
const router = express.Router();

// linkando com o controllers
const controller = require("../controllers/postControllers");

// criando rotas
router.get("/", controller.getAll);
router.get("/:id", controller.getByID);
router.post("/create", controller.createPost);
router.put("/:id", controller.replacePost);
router.patch("/updateTitle/:id", controller.updateTitle);
router.patch("/update/:id", controller.updateAnything);
router.delete("/:id", controller.deletePost);


module.exports = router;