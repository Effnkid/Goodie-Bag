// import { Router } from "express";     is this the same?? as line 2
const router = require('express').Router();
const { Candy } = require('../db');

// GET /api/candies
router.get('/', async (req, res, next) => {
	try {
		res.send(await Candy.findAll());
	} catch (e) {
		next(e);
	}
});

module.exports = router;
