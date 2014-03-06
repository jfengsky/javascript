# Car = (model, year, miles) ->
#   @year = year
#   @model = model
#   @miles = miles
#   # @output = =>
#   #   this.model + ' has gone ' + this.miles + 'km'
#   # @output = formatCar
#   return

# # formatCar = ->
# #   this.model + ' has gone ' + this.miles + 'km'

# Car::output = ->
#   this.model + ' has gone ' + this.miles + 'km'



# tom = new Car('jfeng', 2009, 2000)
# console.log(tom.output())

# dudu = new Car('dudu', 2010, 1000)
# console.log(dudu.output())
# 


box = (num1, num2) ->
  num1 + num2

sum = (num1, num2) ->
  box.apply(this,[num1, num2])
  #box.apply(this, arguments)

sum2 = (num1, num2) ->
  box.call(this, num1, num2)

console.log sum(10,10)
console.log sum2(20,20)
