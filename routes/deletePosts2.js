var posts = require("../posts.json");

exports.delete = function(request, response) { 
	var postData = {
		"topic": request.query.topic,
		"message": request.query.message,
		"recordName": request.query.recordName
	};
	//var del1 = request.query.message;
	delete posts.posts(postData);
	console.log(posts);
	//delete posts.posts[del1];
	response.render("forum", posts);
}