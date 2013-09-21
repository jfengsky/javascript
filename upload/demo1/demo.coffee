uploadBtn = document.getElementById('J_upload')
infoBox = document.getElementById('info')
uploadBtn.onchange = (ev) ->
  files = ev.target.files
  fileInfo = ''
  for file in files
    fileInfo += '<p>' + file.name + '|' + file.size / 1024 + 'KB |' + file.type + '</p>';
  
  infoBox.innerHTML = fileInfo
  return