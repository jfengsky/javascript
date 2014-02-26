Car = (model, year, miles) ->
  @year = year
  @model = model
  @miles = miles
  # @output = =>
  #   this.model + ' has gone ' + this.miles + 'km'
  # @output = formatCar
  return

# formatCar = ->
#   this.model + ' has gone ' + this.miles + 'km'

Car::output = ->
  this.model + ' has gone ' + this.miles + 'km'



tom = new Car('jfeng', 2009, 2000)
console.log(tom.output())

dudu = new Car('dudu', 2010, 1000)
console.log(dudu.output())

