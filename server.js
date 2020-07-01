const express = require('express');
const dontenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dontenv.config({path : './config/config.env'});

const transactions = require('./routes/transaction');

const app = express();

app.use('/api/v1/transactions', transactions)

app.get('/',(req,res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running at ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));