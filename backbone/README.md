#backbone 学习整理笔记
一个新项目要用到backbone，赶紧学习一下:
]原文引自CSDN[]】the5fire](http://blog.csdn.net/column/details/backbone-js-tutorial.htm 和 [yujianshenbingl(http://yujianshenbing.iteye.com/))]

它是基于jquery和underscore的一个js框架,所以引用顺序为:

	src="../jquery.js"
	src="../underscore.js"
	src="../backbone.js"

##model
####1.创建最简单的一个对象
直接通过<code>initialize</code>方法

	Man = Backbone.Model.extend({
        initialize: function(){
            console.log('Hey, you create me!');
        }
    });
	var man = new Man;	// -> Hey,you creae me!
	
####2.对象赋值
第一种：直接定义

通过<code>defaults</code>方法设置默认值：

	Man = Backbone.Model.extend({
        defaults: {
            name:'myname',
            age: '38'
        }
    });
    var man = new Man;
    console.log(man.get('name')); // -> myname
    
第二种：赋值时再定义

通过<code>set</code>方法赋值，再通过<code>get</code>方法和
<code>escape</code>方法获取

	Man = Backbone.Model.extend({
	
	});
  	var man = new Man;
  	man.set({name:'the5fire',age:'10'});
  	console.log(man.get('name')); // -> the5fire
  
* get(): 用于直接返回数据
* escape(): 先将数据中包含的HTML字符转换为实体形式（例如它会将双引号转换为& quot;形式）再返回，用于避免XSS攻击。

模型将原始数据存放在对象的attributes属性中，因此我们也可以通过javabook.attributes属性直接读取和操作这些数据:

	console.dir(man.attributes);

####3.对象中的方法

	Man = Backbone.Model.extend({
    	defaults: {
      		name: 'jfeng',
      		age: 18
    	},
    	aboutMe: function(){
      		return 'my name is ' + this.get('name') + ', and ' + this.get('age') + ' years old!'
    	}
  	});
  	var man = new Man;
  	console.log(man.aboutMe()); // -> my name is jfeng, and 18 years old! 
  	
####4.监听对象中属性的变化

	Man = Backbone.Model.extend({
	    initialize: function(){
	      alert('Hey, you create me!');
	      //初始化时绑定监听
	      this.bind("change:name",function(){
	        var name = this.get("name");
	        alert("你改变了name属性为：" + name);
	      });
	      this.bind("error",function(model,error){
	        alert(error);
	      });
	    },
	    defaults: {
	      name:'张三',
	      age: '38'
	    },
	    validate:function(attributes){
	      if(attributes.name == '') {
	        return "name不能为空！";
	      }
	    },
	    aboutMe: function(){
	      return '我叫' + this.get('name') + ',今年' + this.get('age') + '岁';
	    }
	  });
	  var man = new Man;
	  man.set({name:''}); //根据验证规则，弹出错误提示。

也可以如下方法:


	// 定义book模型
	var Book = Backbone.Model.extend({
	  defaults: {
	    name: 'unknow',
	    author: 'unknow',
	    price: 0
	  }
	});
	
	// 实例化一个模型对象
	var jsbook = new Book({
	  name: '<b>基于MVC的javascript Web 富应用开发</b>',
	  author: 'Alex Maccaw',
	  price: 59
	});
	
	// 输出书的一些信息
	var name = jsbook.escape('name'),
	    author = jsbook.get('author'),
	    price = jsbook.get('price');
	
	//console.dir(jsbook.attributes);
	console.log(name);
	
	jsbook.on('change:price', function(model, value){
	  var price = model.previous('price');
	  if(price < value){
	    console.log('价格上涨了' + (value - price) + '元.');
	  }else if(price > value){
	    console.log('价格下降了' + (value - price) + '元.');
	  }else{
	    console.log('价格没有发生变化.');
	  }
	});
	
	
	jsbook.set({
	  name : 'Java7入门经典',
	  author : 'Ivor Horton',
	  price : 88.50
	}

这里要用到另外两种方法:
* previous()方法接收一个属性名，并返回该属性在修改之前的状态；
* previousAttributes()方法返回一个对象，该对象包含上一个状态的所有数据。

需要注意的是，previous()和previousAttributes()方法只能在数据修改过程中调用（即在模型的change事件和属性事件中调用）