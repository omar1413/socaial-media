const Post = require('../models/post');
const base = require('./baseController');

exports.create = (req, res) => {
	base.set(req, res).create(Post, req.body);
};

exports.get = async (req, res) => {
	base.set(req, res).get(Post, req.params.id);
};

exports.getAll = async (req, res) => {
	base.set(req, res).getAll(Post);
};

exports.update = async (req, res) => {
	const allowedUpdates = [ 'title', 'body' ];
	const updates = Object.keys(req.body);
	base.set(req, res).update(Post, req.body, allowedUpdates, updates);
};

exports.delete = async (req, res) => {
	base.set(req, res).delete(Post, req.params.id);
};

exports.deleteAll = async (req, res) => {
	base.set(req, res).deleteAll(Post);
};
