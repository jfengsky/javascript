define(function(require, exports, module){

  var $ = require('jquery');
  require('indexeddb');

  function Idb(){
    var self = this;
    this.loadFromCache = function(dbname, dbversion, key, data, fn){
      // open data
      var dbOpen = $.indexedDB(dbname, {
        "version": dbversion,
        // "upgrade" : function(transaction){
        //   console.log('upgrade')
        //   console.log(transaction);
        // },
        "schema": {
          1: function(trans){
            var objectStore = trans.createObjectStore(key, {
              "keyPath": "name"
              // "autoIncrement": true
            });
            // objectStore.createIndex("name");
          }
        }
      }).done(function(db, event){
        // get version
        var lastDBVersion = db.version;
        // check version
        console.log(lastDBVersion);
        console.log(dbversion);
        if(lastDBVersion == dbversion){
          $.indexedDB(dbname).objectStore(key).each(function(item){
            console.log(item.value);
            return item.value;
          })

          // TODO 直接从缓存获取新数据
        } else {
          // TODO 从api获取新的数据并写入缓存
          console.log('false');

          // 数据写入离线缓存
          $.indexedDB(dbname).objectStore(key).put(data);
        }

        fn();
        return data;

      });

      
    };

    this.deleteFromCache = function(dbname, key){
      var deletePromise = $.indexedDB(dbname).deleteDatabase();
    };
  };

  module.exports = Idb;
});