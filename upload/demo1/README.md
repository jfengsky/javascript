### HTML5 fileAPI 获取显示图片

input选取多文件<code>multiple</code>

	<input type="file" name="" id="upload" multiple />

change事件获取文件数组
	
	upload.onchange = function(ev){
	
		// 选取的文件信息存放在files数组里
		var files = ev.target.files,
			filesLength = files.length,
			reader,
			image;
		for(var i = 0; i < filesLength; i++){
		
			// 获取文件名
			console.log(files[i].name);
			
			// 获取文件大小
			console.log(files[i].size);
			
			// 获取文件类型
			console.log(files[i].type);
			
			// 读取显示图片
			reader = new FileReader();
			reader.readAsDataURL(files[i]);
			reader.onload = function(e){
				image = document.createElement('img');
				image.src = e.target.result;
				
				// 打印预览图片
				console.log(image);
			}
		}
	}
	
