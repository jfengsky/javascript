##backbone 学习整理笔记
一个新项目要用到backbone，赶紧学习一下:
[原文引自CSDN the5fire](http://blog.csdn.net/column/details/backbone-js-tutorial.html)

它是基于jquery和underscore的一个js框架,所以引用顺序为:

	src="../jquery.js"
	src="../underscore.js"
	src="../backbone.js"

###model
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

通过<code>set</code>赋值，再通过<code>get</code>获取

	Man = Backbone.Model.extend({
	
	});
  	var man = new Man;
  	man.set({name:'the5fire',age:'10'});
  	console.log(man.get('name')); // -> the5fire
  
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
