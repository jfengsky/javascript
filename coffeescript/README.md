##coffeeScript
###一、安装
先装node.js，然后通过npm安装coffeescript
    
    npm install -g coffee-script

###二、如何使用
安装完成后，就可以使用<code>coffee</code>命令来执行脚本、将.coffee文件编译为.js文件
coffee命令如下:

  * -c, --compile   将.coffee文件编译为同名的.js文件。
  * -i, --interactive    启动一个交互Coffee会话来让你尝试一些小代码片段。与不带参数执行 coffee 命令相同
  * -o, --output [DIR]  将所有编译后的javascript文件写入指定的目录([DIR])。与--compile或--watch共同使用。
  * -j, --join [FILE]    编译前，将所有的脚本以传入的顺序组合到一起，并写入指定的文件([FILE])。对构建大型项目颇有用处。
  * -w, --watch    监视文件变化，当有文件更新时，重新运行指定的命令。
  * -p, --print    将编译后的javascript写到标准输出(stdout)，而不写入js文件。
  * -l, --lint    如果安装有jsl(JavaScript Lint)，使用其检查编译结果。（与--watch同用会很方便）
  * -s, --stdio    从管道读入CoffeeScript，并将编译后的javascript写入标准输出。例：
  
        cat src/cake.coffee | coffee -sc

  * -e, -eval    通过命令行参数指定一小段脚本代码，对其进行编译并打出执行结果。例：

        coffee -e "console.log num for num in [0..2]"  // => 0 1 2

  * -r, --require  编译和执行你的代码前，加载一个库。
  * -b, --bare  // TODO 编译后的js文件去掉默认的闭包
  * -t, --token  // TODO 待补充
  * -n, --nodes  // TODO 待补充
  * --nodejs  node.js的命令 node 有很多不错的选项。比如： --debug, --debug-brk, --max-stack-size。使用这个选项，可以将node的选项传递给node.JS。

示例：
  * 将 src 目录中的coffee文件编译为 lib 目录中的js文件：
    
        coffee --compile --output lib/ src/
        coffee -c -o lib/ src/

  * 监视文件，并在每次文件变更时重新编译之：
  
        coffee --watch --compile experimental.coffee
        coffee -w -c experimental.coffee

  * 将 src 目录下的一堆coffee文件编译为一个js文件：
  
        coffee --join project.js --compile src/*.coffee

  * 将一行CoffeeScript的编译结果打印到标准输出：
  
        coffee -bpe "alert i for i in [0..10]"

  * 监视并自动编译整个工程：

        coffee -o lib/ -cw src/

  * 启动CoffeeScript的REPL（Ctrl-D退出，Ctrl-V切换多行模式，单行模式中“\”为续行符）
  
        coffee


