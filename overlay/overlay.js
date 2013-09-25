/**
 * jQuery 弹出层插件
 * 
 */
(function($){
  $.fn.Overlay = function(){
    var self = this,
        doc = document,
        win = window;

    /**
     * 窗口大小发生变化
     * 
     */
    this._resize = function(){
      $(window).resize(function(){
        $('#J_mask').css({
          width: $(win).width(),
          height: $(win).height()
        });
      });
    };

    /**
     * 遮罩层
     * 
     */
    this._mask = function(){
      var mask = '<div class="mask" id="J_mask" style="width:' + $(doc).width() + 'px;height:' + $(doc).height() + 'px"></div>';
      if($('#J_mask').length === 0) {
        $('body').append(mask);
      } else {
        $('#J_mask').show();
      };
      self._resize();
    };

    /**
     * 销毁弹层
     * 
     */
    this.destory = function(el){
      if(el){
        $('body').delegate('#' + el, 'click', function(){
          $('#J_mask').hide();
          $("#J_layer").remove();
        });
      }
    };

    /**
     * 显示弹出层
     * @param  {Object} obj [弹层参数]
     *   {String} type [内容格式 默认text, 支持 iframe ajax]
     *   {Number} width [弹层宽度 默认自动获取]
     *   {Number} height [弹层高度 默认自动获取]
     *   {String} close [关闭弹层按钮id]
     */
    this.show = function(obj){
      /**
       * 弹层默认参数
       * 
       */
      var obj = obj || {
        type: 'text',
        close: 'J_close'
      },
      layer = '<div class="layer" id="J_layer" style="display: none"></div>',
      layerWidth;
      self._mask();
      layerWidth = (0 - obj.width / 2) || (0 - $('#J_layer').width() / 2);
      if($('#J_layer').length === 0){
        $('body').append(layer);
        $("#J_layer").css('margin-left', layerWidth);
      }
      if(obj.width){
        $("#J_layer").css('width', obj.width);
      }
      if(obj.height){
        $("#J_layer").css('height', obj.height);
      }
      $("#J_layer").append(obj.content);
      if(obj.callback) {
        obj.callback();
      }
      $("#J_layer").show();
      self.destory(obj.close);
    };
  }
})(jQuery);