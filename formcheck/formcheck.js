$(function(){
  /**
   * [ 表单验证对象]
   * @return
   */
  var Formcheck = function(){
    var _self = this,
        checkMsg = {
          err_name: '请填写商品名称，20字以内',
          err_email: '请填写正确的Email',
          err_mobile: '请填写正确的手机号码',
          err_desp: '描述不能超过200字'
        };
    /**
     * [ 表单元素 ]
     * @param  {string} select  [表单的选择器]
     * @param  {boolean} mst     [是否必填]
     * @param  {boolean} deftype [初始状态是否正确]
     * @return {[type]}         [description]
     */
    this._elem = function(select, mst, deftype){
      var checks = {
        id: select,
        must: mst,
        correct: deftype,
        errcode: 0
      };
      return checks;
    };
    this.init = function(){
      var checkarr = [],  // 创建数组，写入所有表单对属性
          inputs = $('#J_list :input');
      // 遍历表单，写入属性
      $(inputs).each(function(index){
        var must = ( /^\*/.test( $(this).prev().text() )) ? 1 : 0;
        checkarr.push( _self._elem($(this).attr('name'), must, 0) );
      });
      console.log(checkarr);
    };
  };
  new Formcheck().init();
});