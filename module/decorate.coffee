# Anim = ->

# Anim:: =
#   start: ->
#   stop: ->

# Function::method = (name, fn) ->
#   @::[name] = fn
#   this

# Anim = ->

# Anim.method 'start', ->
#   this

# Anim.method 'end', ->
#   this

# Anim
#   .method 'start', ->
#     this
#   .method 'stop', ->
#     this

Book (isbn, title, author) ->
  if isbn is undefined
    throw new Error 'book constructor requires an isbn'
  @isbn = isbn
  @title = title or 'no title specified'
  return