define (require) ->
  $ = require('jquery')
  countdown = require('./countdown')
  t = "10"
  s = if t.length <= 1 then "0" + t else t
  
  console.log(s)
  testEndTime = new Date(2014,3,12,13,55,0).getTime();
  testStartTime = new Date(2014,3,12,13,53,50).getTime();
  # console.log(testEndTime);
  # console.log(testStartTime);
  count = new countdown({
    startTime: testStartTime,
    endTime: testEndTime,
    callback: ->
      $('#demo').html('end')
      return
  });

  
  return