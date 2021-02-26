var data = require("../data.json");

exports.addData = function(request, response) { 
	// Your code goes here
	var recordData = {
		"date": request.query.date,
		"title": request.query.titleRecord,
		"subject": "Sleep",
		"input": "3"
		//"time": request.query.time,
		//"scale": request.query.scale
	};
	function recordDatas(){
		console.log(data);
	}

	//data.records.push(recordData);

	//console.log(records["data"]);*/
	response.render("record", data);
}
