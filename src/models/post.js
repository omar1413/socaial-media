const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title : {
		type : String
	},
	body  : {
		type : String
	}
});

const post = mongoose.model('Post', postSchema);

module.exports = post;
