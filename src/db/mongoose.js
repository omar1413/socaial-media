const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGO_URI, { useNewUrlParser: true })
	.then(() => {
		console.log('connected to DB');
	})
	.catch((e) => {
		console.log('Error in DB: ', e);
	});
