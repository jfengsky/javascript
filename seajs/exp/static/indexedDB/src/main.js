define(function(require) {

  var $ = require('jquery'),
      idb = require('./idb');
  var school = new idb();

  $('#J_createDB').click(function(){
    var db_name = $('#J_dbname').val();
    var store_name = $('#storename').val();
    var key_name = $('#keyname').val();
    var key_version = "1.12";
    var datas = {
          "db": "school",
          "version": 1.01,
          "items": [
            {
              "store": "student",
              "value": [
                {"ver":1.00, "name": "Tom", "age": 28},
                {"ver":1.01, "name": "terry", "age": 18},
                {"ver":1.02, "name": "joe", "age": 38}
              ]
            }
          ]
        };

    school.loadFromCache(db_name, store_name, key_name, key_version, function(){
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