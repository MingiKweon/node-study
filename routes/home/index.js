"use strict";

const express = require("express");
const router = express.Router();

//라우팅
router.get('/', (req, res) => {
    res.render('home/index');
});

router.get('/login', (req, res) => {
    res.render('home/login');
});

module.exoprts = router;