// Generated by CoffeeScript 1.7.1
define(function(require) {
  var $, count, countdown, testEndTime, testStartTime;
  $ = require('jquery');
  countdown = require('./countdown');
  testEndTime = new Date(2014, 3, 12, 14, 55, 0).getTime();
  testStartTime = new Date(2014, 3, 12, 13, 53, 50).getTime();
  count = new countdown({
    startTime: testStartTime,
    endTime: testEndTime,
    callback: function() {
      $('#demo').html('end');
    }
  });
});