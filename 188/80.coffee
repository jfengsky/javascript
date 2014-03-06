p = (x) ->
  if x
    @x = x
  return

p::backup = ->
  for i in @
    p::[i] = @[i]
  return

p1 = new p(1)
p1.backup()
p1.x = 10
console.log(p1.x)
p1 = p::
console.log(p1.x)