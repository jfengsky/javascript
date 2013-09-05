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

if true
  return true

if true == true
  "ok"

if true then "ok" else "back"

if true != true then a = 3 else a = 54

if true != true
  a = 3
else
  a = 4

alert "it's good" if abc is true

unless abc
  "abc"

if abc isnt true
  "bcd"

txt = "text demo"

insertText = "insert #{txt}"

for name in ["abc", "def", 'bhi']
  alert "name is: #{name}"


for name,i in ["abc", "def"]
  alert "#{i} - #{name}"


rang = [1..5]

firstTwo = ['one', 'tow', 'three'][0..1]

numbers = [0..9]
numbers[3..5] = [-3, -4, -5]

mystring = "myString"[0..2]

words = ['rattled', 'roude', 'rebbles', 'ranks']
alert "stop is " if 'roude' in words