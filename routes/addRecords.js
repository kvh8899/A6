var data = require("../data.json");

exports.addData = function(request, response) { 
	// Your code goes here
	var recordData = {
		"date": request.query.date,
		"title": request.query.titleRecord,
		"subject": request.query.subject,
		"input": "3"
		//"time": request.query.time,
		//"scale": request.query.scale
	};
	console.log(request.query.date);
	console.log(request.query.titleRecord);
	console.log(data.records);
	data.records.push(recordData);
	console.log(recordData);
	//console.log(records["data"]);*/
	response.render("record", data);
	
}
