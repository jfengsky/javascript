##indexedDB知识

####判断浏览器是否支持indexedDB

	document.addEventListener('DOMContentLoaded', function(){
  		if('indexedDB' in window){
    		console.log('indexedDB success')
  		} else {
    		console.log('indexedDB false ')
  		}
	}, false)
	
####最终判断
	
	