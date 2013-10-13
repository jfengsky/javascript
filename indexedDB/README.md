##indexedDB知识

####判断浏览器是否支持indexedDB

	document.addEventListener('DOMContentLoaded', function(){
  		if('indexedDB' in window){
    		console.log('indexedDB success')
  		} else {
    		console.log('indexedDB false ')
  		}
	}, false)
	
####最终判断和使用
	
	var idbSupported = false;
	document.addEventListener('DOMContentLoaded', function(){
  		if('indexedDB' in window){
    		idbSupported = true;
  		}
	}, false);
	
打开一个indexedDB数据库是异步操作，目前有四种不同类型的事件监听事件

* success
* error
* upgradeneeded  首次打开数据库或者改变数据库版本的时候被触发
* blocked 在前一个连接没有被关闭的时候被触发

各种事件的操作：

	var idbSupported = false,
    db;
	document.addEventListener('DOMContentLoaded', function(){
  		if('indexedDB' in window){
    		idbSupported = true;
  		}

  		if(idbSupported){
    		var openRequest = indexedDB.open('test', 1);

    		openRequest.onupgradeneeded = function(e){
      			console.log('upgrading...');
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