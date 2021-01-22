var express = require('express');
var router = express.Router();
const vistaController = require("../controllers/vistaController");

/* GET home page. */
router.get('/', vistaController.mostrar)

module.exports = router;