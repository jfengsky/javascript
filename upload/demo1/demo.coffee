uploadBtn = document.getElementById('J_upload')
infoBox = document.getElementById('info')
imgBox = document.getElementById('imgshow')
uploadBtn.onchange = (ev) ->
  files = ev.target.files
  fileInfo = ''
  imgShow = ''
  for file in files
    reader = new FileReader()
    fileInfo += '<p>' + file.name + '|' + file.size / 1024 + 'KB |' + file.type + '</p>';
    reader.readAsDataURL(file);
    reader.onload = (e) ->
      console.log(e.target.result);
      # imgShow = '<img src="' + e.target.result + '" width="300" />'
      imgShow = document.createElement('img')
      imgShow.src = e.target.result
      imgShow.width = 300
      # console.log(e);
      imgBox.appendChild(imgShow)
      return

  infoBox.innerHTML = fileInfo
  return