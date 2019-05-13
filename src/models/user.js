const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name            : {
		type : String
	},
	email           : {
		type : String
	},
	hashed_password : {
		type : String
	}
});

const user = mongoose.model('User', userSchema);

module.exports = user;
