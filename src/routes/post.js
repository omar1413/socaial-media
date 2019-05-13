const express = require('express');
const Post = require('../controllers/post');

const router = new express.Router();

router.post('/posts', Post.create);

router.get('/posts', Post.getAll);

router.get('/posts/:id', Post.get);

router.patch('/posts/:id', Post.update);

router.delete('/posts', Post.deleteAll);

router.delete('/posts/:id', Post.delete);

module.exports = router;
