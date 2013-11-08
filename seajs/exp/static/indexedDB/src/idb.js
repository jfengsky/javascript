define(function(require, exports, module){

  var $ = require('jquery');
  var angular = require('angularjs');
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

  function getData(fn){
    $.ajax({
      type: "post",
      url: "getlanguage.php",
      data: {
        language: "zh-cn",
        care_resources: ""
      },
      dataType: "json",
      success: function(data){
        fn(data);
      }
    });
  }

  function upUI(data){
    var languageApp = angular.module('langApp', []);

    languageApp.controller('langControl', function($scope){
      var page = {};
      page = data;
      page.item = data.items[0]
      $scope.page = page;
    });
    angular.bootstrap(document, ['langApp']);
  }

  function Idb(){
    var self = this;
    
    this.loadFromCache = function(dbname, storename, keyname, keyversion, data, fn){
      // open data
      var dbOpen = $.indexedDB(dbname, {
        "version": 1,
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
            console.log('db empty');
            getData(function(d){
              
              $.indexedDB(dbname).objectStore(storename).put(d.resource);
            });
          } else {
            var lastVersion = result.version;
            if(keyversion === lastVersion){
              console.log('same version and result:');
              $.indexedDB(dbname).objectStore(storename).each(function(item){

                
                upUI(item.value);
                
                return item.value;
              })
              // TODO 版本相同，直接渲染数据
            } else {
              console.log('different version');
              // 版本不同，api获取新版本，然后渲染模版，写入缓存
              getData(function(d){
                // upUI(item.value);

                upUI(d.resource);
                $.indexedDB(dbname).objectStore(storename).put(d.resource);
              });
            }
          }
        });
      });

      
    };

    this.deleteFromCache = function(dbname, key){
      var deletePromise = $.indexedDB(dbname).deleteDatabase();
    };
  
    
  };

  module.exports = Idb;
});