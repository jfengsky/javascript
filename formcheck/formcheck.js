$(function(){

  /**
   * [ 表单验证对象]
   * @return
   */
  var Formcheck = function(){
    var _self = this;
    this.errMsg = function(){
      checkMsg = {
        ERROR_NAME: {
          0: "请填写商品名称，20字以内",
          1: "商品名称不符合规范"
        },
        ERROR_EMAIL: {
          0: "请填写正确的Email"
        },
        ERROR_MOBILE: {
          0: "请填写正确的手机号码"
        },
        ERROR_DESP: {
          0: "描述不能超过200字",
          1: "描述不能包含特殊字符"
        }
      };
      return checkMsg;
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
      var checkarr = [],  // 写入所有表单对属性
          inputs = $('#J_list :input');
          
      // 遍历表单，写入属性
      $(inputs).each(function(){
        var must = ( /^\*/.test( $(this).prev().text() )) ? 1 : 0;
        checkarr.push( _self._elem($(this).attr('name'), must, 0) );
      });
      return checkarr;
      // console.log(checkarr);
    };
  };


  $('#J_submit').click(function(){
    var forms = new Formcheck(),
        formsInit = forms.init(),
        formsMsg = forms.errMsg();

    $(formsInit).each(function(index){
      if($(this)[0].correct === 0 && $(this)[0].must === 1){
        if($(this)[0].id == 'nickname'){
          $(':input[name=' + $(this)[0].id + ']').nextAll('.errtip').text(formsMsg['ERROR_NAME'][$(this)[0].errcode]);
        };
        if($(this)[0].id === 'email'){
          $(':input[name=' + $(this)[0].id + ']').nextAll('.errtip').text(formsMsg['ERROR_EMAIL'][$(this)[0].errcode]);      
        };
      }
    });
  });

});