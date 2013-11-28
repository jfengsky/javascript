## input
  
    <input
         ng-model="{string}"
         [name="{string}"]
         [required]  // 是否必填，写了必须，不写相反
         [ng-required="{boolean}"]
         [ng-minlength="{number}"] // 文本最小字数
         [ng-maxlength="{number}"] // 文本最大字数
         [ng-pattern="{string}"]
         [ng-change="{string}"] >

* require: 是否必填

* ngMinlength: 最小字符数

* ngMaxlength: 最大字符数

* ngPattern: 验证表达式

* ngChange: 事件绑定

* $valid: 表单是否正确

      myForm.$valid = true

* $error: 表单里的错误
    
      myForm.$error.required = false