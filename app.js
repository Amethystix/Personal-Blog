//Main file for routing and express
reqire('./db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');


const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'hbs');

app.get('/home', (req, res)=>{
	res.render('home');
});
app.get('/blog', (req, res)=>{
	res.render('blog');
});
app.get('/resume', (req, res)=>{
	res.render('resume');
});

app.listen(3000);