//Main file for routing and express
reqire('./db');

const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'hbs');
