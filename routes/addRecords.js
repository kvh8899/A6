var data = require("../records.json");

exports.addData = function(request, response) {    
	// Your code goes here
	var recordData = {
		"date": request.query.date,
		"title": request.query.title,
		"subject": request.query.subject
	};
	data.records.push(recordData);
	console.log(data);
	response.render("record", data);
}