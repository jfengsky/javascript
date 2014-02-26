# productManage = {}

# productManage.createA = ->

#   console.log 'productA'
#   return

# # productManage.createB = ->
# #   console.log 'productB'
# #   return

# productManage.factory = (type) ->
#   new productManage[type]

# Test = productManage.factory('test')

# Test.url = 'http://github.com'

# console.log(Test);


# Person = (name, age) ->
#   obj = {}
#   obj.name = name
#   obj.age = age
#   obj

# p1 = Person('jack', 25)
# p2 = Person('tom', 31)

# console.log(p1.name)


switch day
  when "Mon" then go work
  when "Tue" then go relax
  when "Thu" then go iceFishing
  when "Fri", "Sat"
    if day is bingoDay
      go bingo
      go dancing
  when "Sun" then go church
  else go work


# car = ->
benchi = ->
bmw = ->
aodi = ->

Carfactory = 
  createCar: (brand) ->
    switch brand
      when "benchi" then car = new benchi()
      when "bmw" then car = new bmw()
      when "aodi" then car = new aodi()
      else car = new car()
    return
