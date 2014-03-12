define (require) ->
  $ = require('jquery')
  countdown = require('./countdown')
  testEndTime = new Date(2014,3,12,14,55,0).getTime();
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