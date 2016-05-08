
var mongoose = require('mongoose'),
	User = require('mongoose').model('User');

var blogSchema = mongoose.Schema({
	user_id: User._id,
	created: {type: Date, default: Date.now},
	text: {type: String},
	hidden: {type: Boolean}
});

var Blog = mongoose.model('Blog',blogSchema);