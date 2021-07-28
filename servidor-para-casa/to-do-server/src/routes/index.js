const express = require("express");
const router = express.Router();

router.get("/", (request, response)=>{
    response.status(200).json({
        "title": "to-do list {reprograma}",
        "message": "Seja bem-vinda à nossa API!",
        "version": "1.0.0",
        "searchRules": "Por favor, verifique nossa documentação para utilizar nossas ferramentas corretamente."
    });
});

module.exports = router;