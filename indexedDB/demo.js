// 判断浏览器是否支持indexedDB
// document.addEventListener('DOMContentLoaded', function(){
//   if('indexedDB' in window){
//     console.log('indexedDB success')
//   } else {
//     console.log('indexedDB false ')
//   }
// }, false)

// --------------------------------------------------------

// var idbSupported = false;
// document.addEventListener('DOMContentLoaded', function(){
//   if('indexedDB' in window){
//     idbSupported = true;
//   }
// }, false);

// --------------------------------------------------------

var idbSupported = false,
    db;
document.addEventListener('DOMContentLoaded', function(){
  if('indexedDB' in window){
    idbSupported = true;
  }

  if(idbSupported){
    var openRequest = indexedDB.open('test_v2', 1);

    openRequest.onupgradeneeded = function(e){
      console.log('running onupgradeneeded');
      var thisDB = e.target.result;
      if(!thisDB.objectStoreNames.contains('firstOS')){
        thisDB.createObjectStore('firstOS')
      }
    }

    openRequest.onsuccess = function(e){
      console.log('success');
      db = e.target.result;
    }

    openRequest.onerror = function(e){
      console.log('error');
      console.dir(e);
    }
  }

}, false);