//Main file for routing and express
require('./db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const Entry = mongoose.model('Entry');

app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
	res.redirect('/home');
});
app.get('/home', (req, res)=>{
	res.render('home');
});
app.get('/blog', (req, res)=>{
	res.render('blog');
});
app.get('/blog/:slug', (req, res)=>{
	Entry.find({slug: req.params.slug}, (err, entry)=>{
		if(req.err){
			res.render('errPage');
		}
		else{
			if(!entry){
				res.render('blogEntry');
			}
			else{
				res.render('blogEntry', {blog: entry});
			}
		}
	});
});
app.get('/resume', (req, res)=>{
	res.render('resume');
});

app.listen(3000);