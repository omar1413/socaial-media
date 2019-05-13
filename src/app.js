const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./db/mongoose');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());
app.use(postRouter);

const port = process.env.PORT;

app.listen(port, () => console.log('listening to port ' + port));
