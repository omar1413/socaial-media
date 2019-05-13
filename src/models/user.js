const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	name     : {
		type : String
	},
	email    : {
		type     : String,
		required : true,
		unique   : true
	},
	password : {
		type     : String,
		required : true
	}
});

userSchema.pre('save', async function(next) {
	const user = this;
	await hashPassword(user);
	next();
});

const hashPassword = async (user) => {
	user.password = await bcrypt.hash(user.password, 8);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
