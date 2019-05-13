const User = require('../models/user');
const base = require('./baseController');

exports.create = (req, res) => {
	base.set(req, res).create(User, req.body);
};

exports.get = async (req, res) => {
	base.set(req, res).get(User, req.params.id);
};

exports.getAll = async (req, res) => {
	base.set(req, res).getAll(User);
};

exports.update = async (req, res) => {
	const allowedUpdates = [ 'name', 'email', 'password' ];
	const updates = Object.keys(req.body);
	base.set(req, res).update(User, req.body, allowedUpdates, updates);
};

exports.delete = async (req, res) => {
	base.set(req, res).delete(User, req.params.id);
};

exports.deleteAll = async (req, res) => {
	base.set(req, res).deleteAll(User);
};
