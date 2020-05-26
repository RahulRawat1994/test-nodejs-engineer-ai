var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

/* GET users listing. */
router.get('/users/', userCtrl.getAll);
router.get('/users/seed', userCtrl.seed);
router.get('/user/:id', userCtrl.find);
router.put('/user/:id', userCtrl.update);
router.post('/user/', userCtrl.add);
router.delete('/user/:id', userCtrl.remove);
router.get('/typeahead/:input', userCtrl.search);
module.exports = router;
