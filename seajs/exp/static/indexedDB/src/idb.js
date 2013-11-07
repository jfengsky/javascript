define(function(require, exports, module){
  console.log('idb loaded');
  require('indexeddb');
  module.exports = function(DBname, Ver, ){
    return {
      saveStore: function(){

      },
      getStoreVer: function(){

      },
      getStore: function(){

      },
      delStore: function(){

      }
    }
  };
});