const express = require('express');
const Bogh = require('../controllers/bogh');

const router = new express.Router();

router.post('/boghs', Bogh.create);

router.get('/boghs', Bogh.getAll);

router.get('/boghs/:id', Bogh.get);

router.patch('/boghs/:id', Bogh.update);

router.delete('/boghs', Bogh.deleteAll);

router.delete('/boghs/:id', Bogh.delete);

module.exports = router;
