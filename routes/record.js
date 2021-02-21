var record2 = require('../records.json')

exports.viewR = function(req,res){
  res.render('record', record2);
};
