var posts = require("../posts.json");

exports.delete = function(request, response) { 
	var del = request.query.topic;
	var del1 = request.query.message;
	delete posts.posts[del];
	delete posts.posts[del1];
}