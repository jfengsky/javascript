define(function(require) {

  var $ = require('jquery'),
      idb = require('./idb');
  var store_name= $('#storename').val();
  var school = new idb(store_name);


  


  $('#J_createDB').click(function(){
    // var db_name = $('#J_dbname').val();
    
    var key_name = $('#keyname').val();
    var key_version = "1.05";
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

    school.loadFromCache(key_name, key_version, function(){
      console.log("loadfromcache");
    });
  });


  $('#J_delIndeedDB').click(function(){
    // var db_name = $('#J_dbname').val();
    // var key_name = $('#storename').val();
    console.log('del db');
    school.deleteFromCache();
  });
});