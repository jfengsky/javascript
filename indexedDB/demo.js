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
      var authorIndex = store.createIndex("by_author", "author");

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
        // 添加 store
        store.put({title: temp_title, author: temp_auth, isbn: temp_isbn});
        tx.complete = function(){
          console.log('push complete');
        }
      });
      
      // del store
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

      // get store
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


      // del DB
      $('#delDB').click(function(){
        console.log('del DB');
        db.delete("library");
      });

      $('#getCursor').click(function(){
        var tx = db.transaction("books", "readonly");
        var store = tx.objectStore("books");
        var index = store.index("by_author");

        var request2 = index.openCursor(IDBKeyRange.only("auth2"));
        request2.onsuccess = function() {
          var cursor = request2.result;
          if (cursor) {
            // Called for each matching record.
            console.log(cursor.value);
            // console.log(cursor.value.isbn, cursor.value.title, cursor.value.author);
            cursor.continue();
          } else {
            // No more matching records.
            console.log('get null');
          }
        };

      });

    }

  }



}, false);

