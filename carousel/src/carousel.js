// Generated by CoffeeScript 1.7.1

/**
 * 是否自动滚动
 * 是否循环切换
 * 鼠标悬停停止切换
 * 页码
 * 翻页进度
 */
define(function(require, exports, module) {
  var $, Carousel;
  $ = require('jquery');

  /**
   * [Carousel description]
   * @param {String} element carousel容器id
   * @param {Json} options 配置参数
   *     @param {Number} height 容器高度(默认为空，通过js自动获取，在none状态下会获取不到，需要配置)
   *     @param {Number} width  容器宽度，配置同上
   *     @param {Number} items  容器显示多少个
   */
  Carousel = function(element, options) {
    this.$element = element;
    this.$options = options;
  };
  Carousel.prototype = {
    _start: function() {},
    _hover: function() {},
    init: function() {
      var carouselCnt, carouselItem, carouselinner, cntHeight, cntWidth, itemHeight, itemNumber, itemWidth, self;
      self = this;
      carouselCnt = $(this.$element).find('.carsousel-content');
      carouselinner = $(this.$element).find('.carousel-inner');
      carouselItem = carouselinner.children();

      /**
       *  获取容器宽度和高度
       */
      cntWidth = this.$options.width || carouselCnt.width();
      cntHeight = this.$options.height || carouselinner.height();

      /**
       *  获取item的宽度和高度
       */
      itemWidth = carouselItem.outerWidth(true);
      itemHeight = carouselItem.outerHeight(true);
      itemNumber = this.$options.items || Math.floor(cntWidth / itemWidth);
      carouselCnt.css({
        width: itemWidth * itemNumber,
        height: itemHeight,
        position: 'relative',
        margin: 'auto'
      });
      carouselinner.css({
        width: carouselItem.length * itemWidth,
        position: 'absolute',
        left: 0,
        top: 0
      });
    }
  };
  module.exports = Carousel;
});
