const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./db/mongoose');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const boghRouter = require('./routes/bogh');

const app = express();

app.use(express.json());
app.use(postRouter);
app.use(userRouter);
app.use(boghRouter);

const port = process.env.PORT;

app.listen(port, () => console.log('listening to port ' + port));
