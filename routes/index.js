var express = require('express');
var router = express.Router();
var fullschedule = require('../fullschedule');
var today = require('../adapters/today');

router.get('/today', function(req, res, next) {
	fullschedule(function(data) {
		today(data, function(d) {
			res.send(d);
		});
	});
});

module.exports = router;