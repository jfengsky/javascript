###
 * 是否自动滚动
 * 是否循环切换
 * 鼠标悬停停止切换
 * 页码
 * 翻页进度
###
define (require, exports, module) ->
  $ = require('jquery')
  Carousel = (element, options) ->
    @element = element
    @options = options
    return
  Carousel:: = 
    _start: () ->
    _hover: () ->
    init: () ->
      
  module.exports = Carousel
  return