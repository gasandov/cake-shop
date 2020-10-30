const express = require('express');
const dotenv = require('dotenv');

const mongoConnection = require('./src/config/db');

dotenv.config({
    path: '.env'
});

const PORT = process.env.PORT || 5000;

mongoConnection();

const cakes = require('./src/routes/cakes');

const app = express();

app.use(express.json());

app.use('/cakes', cakes);

app.listen(PORT, () => {
    console.log('Server now running...');
});