var idbSupported = false, // 是否支持indexedDB 默认为不支持
    db; 
var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;

var customerData = [
  {
    ssn:'444-44-444',
    name: 'bill',
    age: 25,
    email: 'bill@mail.com'
  },
  {
    ssn: '555-55-5555',
    name: 'terry',
    age: 32,
    email: 'terry@gmail.com'
  }
];

document.addEventListener('DOMContentLoaded', function(){
  if('indexedDB' in window){
    idbSupported = true;
  }

  if(idbSupported){
    
    var request = indexedDB.open("library");
    request.onupgradeneeded = function(){
      var db = request.result;
      var store = db.createObjectStore("books", {keyPath: "isbn"});
      var titleIndex = store.createIndex("by_title", "title", {unique: true});

    }


    request.onsuccess = function(ev){
      db = request.result;

      document.getElementById('addDB').addEventListener('click', function(){
        console.log('add store');
        var tx = db.transaction("books", "readwrite");
        var store = tx.objectStore("books");
        var temp_title = $('#tit').val();
        var temp_auth = $('#auth').val();
        var temp_isbn = $('#isbn').val() - 0;
        // 添加
        store.put({title: temp_title, author: temp_auth, isbn: temp_isbn});
        
      });

      $('#delstore').click(function(){
        console.log('del store');
        var tx = db.transaction("books", "readwrite");
        var store = tx.objectStore("books");
        var del_key = parseInt($('#delkey').val());
        console.log(del_key);
        var delstore = store.delete(del_key);
        delstore.onsuccess = function(){
          console.log('has delete');
        }
      });

      $('#getkeybutton').click(function(){
        console.log('get key');
        var tx = db.transaction("books", "readwrite");
        var store = tx.objectStore("books");
        var get_key = parseInt($('#getkey').val());
        var getstore = store.get(get_key);
        console.log(getstore);
        getstore.onsuccess = function(ev){
          console.log(this.result);
        }
      });

    }

  }



}, false);

