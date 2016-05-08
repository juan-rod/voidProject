app.controller('textBarCtrl',function($scope, blogCRUD){
	
	$scope.blogPost = {};

	$scope.submitPost = function() {
		var blogPost = {
			text : $scope.blogPost
		}

		blogCRUD.createBlog(blogPost).then(function(result){
			if(result.data.success){
				$scope.blogPost = {};
				console.log("blogPost created:", blogPost)
			}
		}, function(reason){
			console.log("reason:", reason);
		})
	};

});
	