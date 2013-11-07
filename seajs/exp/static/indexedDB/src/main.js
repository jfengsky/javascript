define(function(require) {

  var $ = require('jquery'),
      idb = require('./idb');
  var school = new idb();
  console.log(school);

  $('#J_createDB').click(function(){
    var db_name = $('#J_dbname').val();
    var key_name = $('#storename').val();
    var datas = {
      "name": "asdfa",
      "age": 23
    };
    school.loadFromCache(db_name, 1, key_name, datas, function(){
      console.log('loadfromecache');
    });
  });


  $('#J_delIndeedDB').click(function(){
    var db_name = $('#J_dbname').val();
    var key_name = $('#storename').val();
    console.log('del db');
    school.deleteFromCache(db_name, key_name);
  });
});