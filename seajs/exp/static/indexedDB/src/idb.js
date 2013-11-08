define(function(require, exports, module){

  var $ = require('jquery');
  require('indexeddb');

  var temp_data = {
    "student": "terry",
    "version": "1.10" ,
    "items":[
      {
        "age": 18,
        "sex": "male",
        "NO": 201204001,
        "address": "fuping road 1023"
      }
      
    ]
  };



  function Idb(){
    var self = this;
    this.loadFromCache = function(dbname, storename, keyname, keyversion, data, fn){
      // open data
      var dbOpen = $.indexedDB(dbname, {
        "version": 1,
        // "upgrade" : function(transaction){
        //   console.log('upgrade')
        //   console.log(transaction);
        // },
        "schema": {
          1: function(trans){
            var objectStore = trans.createObjectStore(storename, {
              "keyPath": storename
            });
            // objectStore.createIndex(storename);
          }
        }
      }).done(function(db, event){
        // get version
        $.indexedDB(dbname).objectStore(storename).get(keyname).done(function(result, event){

          if(!result) {
            $.ajax({
                type: "post",
                url: "getlanguage.php",
                data: {
                  language: "zh-cn",
                  care_resources: ""
                },
                dataType: "json",
                success: function(data){
                  console.log(data);
                  $.indexedDB(dbname).objectStore(storename).put(data.resource);
                }
              });
          } else {
            var lastVersion = result.version;
            if(keyversion === lastVersion){
              console.log('same version');
              $.indexedDB(dbname).objectStore(storename).each(function(item){
                console.log(item.value);
                return item.value;
              })
              // TODO 版本相同，直接渲染数据
            } else {
              console.log('different version');
              // 版本不同，api获取新版本，然后渲染模版，写入缓存
              
            }
          }

          

        });
        // $.indexedDB(dbname).objectStore(storename).put(temp_data);
        // 
        // 
        // console.log(event.setVersion);
        // // get version
        // var lastDBVersion = db.version;
        // // check version
        // // console.log(lastDBVersion);
        // // console.log(dbversion);
        // if(lastDBVersion == dbversion){
        //   $.indexedDB(dbname).objectStore(key).each(function(item){
        //     console.log(item.value);
        //     return item.value;
        //   })

        //   // TODO 直接从缓存获取新数据
        // } else {
        //   // TODO 从api获取新的数据并写入缓存
        //   $.ajax({
        //     type: "post",
        //     url: "getLanguage.php",
        //     data: {
        //       language: "zh-cn",
        //       care_resources: ""
        //     },
        //     success: function(data){
        //       var back_ver,
        //           back_db,
        //           back_store,
        //           back_data;
        //       if(!data.error){
        //         // console.log(data.resource);
        //         back_ver = data.resource.version;
        //         back_db = data.resource.db;
        //         back_store = data.resource.items[0].store;
        //         back_data = data.resource.items[0].value;
        //         // console.log(back_db);
        //         // console.log(back_store);
        //         // console.log(back_data);
        //         // 
        //         // TODO 更新模版
                
        //         // 更新离线缓存
        //           // 更新版本
        //             // 删除旧的数据库
        //             // 写入新的数据库
        //           // 更新数据
        //           console.log(back_data);
        //           for(var i = 0; i < back_data.length; i++){
        //             $.indexedDB(back_db).objectStore(back_store).put(back_data[i]);
        //           }
        //       }
        //     },
        //     dataType: "json"

        //   });

        //   // 数据写入离线缓存
        //   // $.indexedDB(dbname).objectStore(key).put(data);
        // }

        // fn();
        // return data;

      });

      
    };

    this.deleteFromCache = function(dbname, key){
      var deletePromise = $.indexedDB(dbname).deleteDatabase();
    };
  };

  module.exports = Idb;
});