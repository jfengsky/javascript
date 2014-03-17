// Generated by CoffeeScript 1.7.1
define(function(require, exports, module) {
  var $, Countdown;
  $ = require('jquery');

  /*
   * 倒计时
   * @param {JsonObject} args 倒计时参数:
   *     @param {String} format     格式化时间(d:h:m:s)
   *     @param {Number} startTime  开始时间(ms)
   *     @param {Number} endTime    结束时间(ms)
   *     @param {String} content    倒计时容器
   *     @param {Function} callback 倒计时结束后回调函数
   */
  Countdown = function(args) {
    var countTime, self, timeInterval;
    self = this;
    countTime = args.endTime - args.startTime;

    /*
     * 位数补0，保持时，分，秒为2位
     * @param {Number} tempTime 时间数字
     * @return {String} 返回补0后的字符串
     */
    this._fullTime = function(tempTime) {
      if (tempTime.toString().length <= 1) {
        return "0" + tempTime;
      } else {
        return tempTime;
      }
    };

    /*
     * 倒计时方法
     */
    timeInterval = setInterval(function() {
      var tempTime;
      if (countTime > 0) {
        countTime = countTime - 1000;
        tempTime = {
          d: Math.floor(countTime / (1000 * 60 * 60 * 24)),
          h: self._fullTime(Math.floor(countTime / (1000 * 60 * 60) % 24)),
          m: self._fullTime(Math.floor(countTime / (1000 * 60) % 60)),
          s: self._fullTime(Math.floor(countTime / 1000 % 60))
        };
        $('#demo').html(tempTime.d + '天' + tempTime.h + '小时' + tempTime.m + '分钟' + tempTime.s + '秒');
      } else if (countTime <= 0) {
        clearInterval(timeInterval);
        args.callback();
      }
    }, 1000);
  };
  module.exports = Countdown;
});