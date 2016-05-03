var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
	user_id: {},
	slug:
	created: {type: Date, default: Date.now},
	text: {type: String},
	hidden: {type: Boolean}
});