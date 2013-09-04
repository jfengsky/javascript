exports = this

func = -> 
  'bar'

fund = ->
  'bar'
  return

times = (a, b) ->
  a * b

times = (a = 1, b = 2) ->
  a * b

# sum = (nums...) ->
#   result = 0
#   nums.forEach (n) -> result += n
#   result

a = "hello"

alert a
alert(a)
alert inspect a
alert inspect(a)
alert(inspect(a))

this.clickHandler = -> 
  alert "clicked"

dlement.addEventListener 'click', (e) => this.clickHandler(e)


obj1 =