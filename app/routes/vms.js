var express = require('express');
var router = express.Router();
var tokenStore = require('../lib/token_store');
/* GET users listing. */
router.get('/', function(req, res, next) {
	token = tokenStore.getInstance().getToken();
	console.log("token=", token);
  res.render('vms', { title: 'VM List' });
});

module.exports = router;
