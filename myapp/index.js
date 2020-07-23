var express = require('express');
var router = express.Router();
const IndexContoller = require('../controllers/index_controller');
/* GET home page. */
router.get('/', IndexContoller.list);

module.exports = router;