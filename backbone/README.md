#backbone 学习整理笔记
一个新项目要用到backbone，赶紧学习一下:
]原文引自CSDN[the5fire](http://blog.csdn.net/column/details/backbone-js-tutorial.htm) 和 [yujianshenbingl](http://yujianshenbing.iteye.com/)

它是基于jquery和underscore的一个js框架,所以引用顺序为:

	src="../jquery.js"
	src="../underscore.js"
	src="../backbone.js"

##model
###1.创建最简单的一个对象
直接通过<code>initialize</code>方法

	Man = Backbone.Model.extend({
        initialize: function(){
            console.log('Hey, you create me!');
        }
    });
	var man = new Man;	// -> Hey,you creae me!
	
###2.对象赋值
#####第一种：直接定义

通过<code>defaults</code>方法设置默认值：

	Man = Backbone.Model.extend({
        defaults: {
            name:'myname',
            age: '38'
        }
    });
    var man = new Man;
    console.log(man.get('name')); // -> myname
    
#####第二种：赋值时再定义

通过<code>set</code>方法赋值，再通过<code>get</code>方法和
<code>escape</code>方法获取

	Man = Backbone.Model.extend();
  	var man = new Man;
  	man.set({name:'the5fire',age:'10'});
  	console.log(man.get('name')); // -> the5fire
  
* get()方法用于直接返回数据
* escape()方法先将数据中包含的HTML字符转换为实体形式（例如它会将双引号转换为& quot;形式）再返回，用于避免XSS攻击。

模型将原始数据存放在对象的attributes属性中，因此我们也可以通过javabook.attributes属性直接读取和操作这些数据:

	console.dir(man.attributes);

###3.对象中的方法

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
  	
###4.监听对象中属性的变化

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

###5.数据验证
通过<code>validate</code>方法，该方法会在模型中的数据发生改变之前被自动调用

	// 定义Book模型类
	var Book = Backbone.Model.extend({
	    validate : function(data) {
	        if(data.price < 1) {
	            return '书籍价格不应低于1元.';
	        }
	    }
	});
	
	var javabook = new Book();
	
	// 监听error事件，当验证失败时触发
	javabook.on('error', function(model, error) {
	    console.log(error);
	});
	
	javabook.set('price', 0);
	
validate方法接收一个参数，表示需要进行验证的数据集合，如果validate方法没有任何返回值（即undefined），则表示验证通过；如果验证不通过，我们常常会返回一个错误字符串或自定义对象。但实际上，当你返回一个false也会被认为验证通过，因为Backbone内部会将validate的返回值转换为布尔类型，如果为false则认为验证通过，反之则认为不通过（虽然这听起来有些别扭）。

当validate验证不通过时，会触发error事件，并将模型对象和validate方法的返回值传递给error事件的监听函数

Backbone提供了另一种方式对error事件进行覆盖，来看看这个例子：

	var Book = Backbone.Model.extend({
	  validate: function(attributes){
	    if(attributes.price < 1){
	      return 'too low';
	    }
	  },
	  initialize: function(){
	    this.bind('error', function(model, error){
	      console.log(error);
	    })
	  }
	});
	var book = new Book();
	
	// 在调用set()方法时，传递了一个配置对象，包含自定义的error处理方法
	book.set({price:0},{
	  error: function(model, error){
	    console.log('new error ' + error);
	  }
	});
	
在这段代码中，我们在调用set()方法时，传递了第三个参数，它是一个用于描述配置信息的对象，我们设定了一个error函数。当validate方法验证失败时，会优先调用配置中传递的error函数，如果没有传递error函数，则会触发error事件。

如果我们不希望对数据进行验证，可以在调用set()方法时传递一个silent配置，silent配置用于忽略验证规则，并且它不会触发change和error等事件。

在上面例子的基础上，我们修改一下set()方法的调用方式：

	book.set('price', 0, {
	    silent : true
	});
	
我们设置了一个非法的数据，同时指定了silent配置，结果并没有触发error事件，因为它并没有调用validate方法对数据进行验证。

我们再将set()方法的调用代码修改一下：

	book.set('price', 0, {  
	    silent : true  
	});  
	  
	book.set(price, -1); 

执行这段代码，控制会再次输出“书籍价格不应低于1元.”。
　　从结果中可以看出，silent配置仅仅是忽略对本次数据的验证，而在下一次数据发生变化时，会重新执行validate方法进行验证。

　　使用silent配置设置数据时，模型也不会触发change事件，这这意味着数据在业务层面并没有真正被设置到模型中，这有利于我们及时对错误的数据进行恢复和回滚。
　　
###6.删除数据
* unset()方法用于删除对象中指定的属性和数据
* clear()方法用于删除模型中所有的属性和数据

下面是例子:

	// 定义Book模型类
	var Book = Backbone.Model.extend();
	
	// 实例化模型对象
	var javabook = new Book({
	    name : 'Java7入门经典',
	    author : 'Ivor Horton',
	    price : 88.50
	});
	
	// 输出: Java7入门经典
	console.log(javabook.get('name'));
	
	// 删除对象name属性
	javabook.unset('name');
	
	// 输出: undefined
	console.log(javabook.get('name'));
	当我们对模型的name属性执行unset()方法后，模型内部会使用delete关键字将name属性从对象中删除。
	
	clear()方法与unset()方法执行过程类似，但clear()方法会删除模型中的所有数据，例如：
	// 定义Book模型类
	var Book = Backbone.Model.extend();
	
	// 实例化模型对象
	var javabook = new Book({
	    name : 'Java7入门经典',
	    author : 'Ivor Horton',
	    price : 88.50
	});
	
	// 删除对象name属性
	javabook.clear();
	
	// 以下均输出: undefined
	console.log(javabook.get('name'));
	console.log(javabook.get('author'));
	console.log(javabook.get('price'));

在调用unset()和clear()方法清除模型数据时，会触发change事件，我们也同样可以在change事件的监听函数中通过previous()和previousAttributes()方法获取数据的上一个状态。

###7.把模型数据同步到服务器
如果我们希望让Backbone自动与服务器接口进行交互，首先应该配置模型的URL，Backbone支持3种方式的URL配置：

#####第一种是urlRoot方式：

	// 定义Book模型类
	var Book = Backbone.Model.extend({
	    urlRoot : '/service'
	});
	
	// 创建实例
	var javabook = new Book({
	    id : 1001,
	    name : 'Thinking in Java',
	    author : 'Bruce Eckel',
	    price : 395.70
	});
	
	// 保存数据
	javabook.save();
	
你可以抓包查看请求记录，你能看到请求的接口地址为：http://localhost/service/1001

其中localhost是我的主机名，因为我在本地搭建了一个Web服务器环境。

service是该模型的接口地址，是我们在定义Book类时设置的urlRoot。

1001是模型的唯一标识（id），我们之前说过，模型的id应该是由服务器返回的，对应到数据库中的某一条记录，但这里为了能直观的测试，我们假设已经从服务器端拿到了数据，且它的id为1001。

接下来，我们将save()方法换成destroy()方法（该方法用于将模型中的数据从服务器删除）：

你能看到请求的接口地址仍然为：http://localhost/service/1001。这并不奇怪，如果你细心观察，会发现两次请求头中的Request Method参数分别为PUT和DELETE，服务器接口会根据它来判断你所做的操作。

如果你的浏览器不支持REST发送方式，你可能会看到Request Method始终是POST类型，且在Form Data中会多出一个_method参数，PUT和DELETE操作名被放在了这个_method参数中。这是Backbone为了适配低版本浏览器而设计的另一种方法，你的服务器接口也必须同时支持这种方式。
#####另一种是url方式:

	// 定义Book模型类
	var Book = Backbone.Model.extend({
	urlRoot : '/service',
	url : '/javaservice'
	});
	
	// 创建实例
	var javabook = new Book({
	    id : 1001,
	    name : 'Thinking in Java',
	    author : 'Bruce Eckel',
	    price : 395.70
	});
	
	// 保存数据
	javabook.save();