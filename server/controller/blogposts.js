var Blog = require('mongoose').model('Blog');

exports.getBlog = function(req,res){
	Blog.find({}).exec(function(err,collection){
		res.send(collection);
	})
}

exports.createBlog = function(req,res,next){
	var blogData = req.body;
	Blog.create(blogData, function(err,user){
		if(err){
			res.status(400);
			return res.send({reason:err.toString()});
		}
	})
};

exports.updateBlog = function(req,res,next){

}
exports.deleteBlog = function(req,res,next){
	
}