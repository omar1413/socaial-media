const Post = require('../models/post');
exports.create = async (req, res) => {
	try {
		const post = new Post(req.body);
		await post.save();
		res.send(post);
	} catch (e) {
		res.status(500).send(e);
	}
};

exports.get = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).send();
		}
		res.send(post);
	} catch (e) {
		res.status(500).send(e);
	}
};

exports.getAll = async (req, res) => {
	try {
		const posts = await Post.find({});
		res.send(posts);
	} catch (e) {
		res.status(500).send(e);
	}
};

exports.update = async (req, res) => {
	const allowedUpdates = [ 'title', 'body' ];
	const updates = Object.keys(req.body);
	const validUpdate = updates.every((update) => allowedUpdates.includes(update));
	if (!validUpdate) {
		return res.status(400).send({ error: 'invalid updates' });
	}
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).send();
		}

		updates.forEach((update) => (post[update] = req.body[update]));

		await post.save();
		res.send(post);
	} catch (e) {
		res.status(500).send(e);
	}
};

exports.delete = async (req, res) => {
	try {
		const post = await Post.findByIdAndDelete(req.params.id);
		if (!post) {
			return res.status(404).send();
		}
		res.send(post);
	} catch (e) {
		res.status(500).send(e);
	}
};

exports.deleteAll = async (req, res) => {
	try {
		posts = await Post.deleteMany({});
		res.send({ deleted: posts.deletedCount });
	} catch (e) {
		res.status.send(e);
	}
};
