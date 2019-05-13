const express = require('express');
const User = require('../controllers/user');

const router = new express.Router();

router.post('/users', User.create);

router.get('/users', User.getAll);

router.get('/users/:id', User.get);

router.patch('/users/:id', User.update);

router.delete('/users', User.deleteAll);

router.delete('/users/:id', User.delete);

module.exports = router;
