const express = require("express");
let router = express.Router();
const productosController = require("../controllers/productosController");

router.get("/detail/:id/:category",productosController.detalle);

module.exports = router;