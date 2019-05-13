const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		title : {
			type : String
		}
	},
	{ timestamps: true }
);

const post = mongoose.model('Bogh', postSchema);

module.exports = post;
