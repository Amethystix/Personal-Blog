const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const Entry = new mongoose.Schema({
	title: {type:String, required: [true, '{PATH} must be defined']},
	content: {type:String, required: [true, '{PATH} must be defined']},
	//Featured image in the form of an absolute url
	featuredImg: String
});
Entry.plugin(URLSlugs('title'));
mongoose.model('Entry', Entry);

mongoose.connect('mongodb://localhost/personal');