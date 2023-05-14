var express = require('express');
var router = express.Router();

const mutationController = require("../controllers/mutationsController")

/* GET users listing. */
router.post('/', mutationController.create);
router.get('/stats', mutationController.reportstats);
module.exports = router;
