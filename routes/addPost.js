var posts = require("../posts.json");

exports.post = function(request, response) { 
	var postData = {
		"topic": request.query.topic,
		"message": request.query.message,
		"recordName": request.query.recordName
	};
	posts.posts.push(postData);
	console.log(posts);
	//console.log(records["data"]);
	response.render("forum", posts);
}

