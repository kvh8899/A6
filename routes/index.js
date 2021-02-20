var data = require('../data.json');

console.log(data);

  exports.view = function(req, res){
  res.render('index', data);
  //console.log(data.name);
};
