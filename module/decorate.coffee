# Anim = ->

# Anim:: =
#   start: ->
#   stop: ->

Function::method = (name, fn) ->
  @::[name] = fn
  this

Anim = ->

# Anim.method 'start', ->
#   this

# Anim.method 'end', ->
#   this

Anim
  .method 'start', ->
    this
  .method 'stop', ->
    this