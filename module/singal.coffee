###
mySingle = 
  property1: "something1"
  property2: "something2"
  method1: ->
    console.log "singal method"
###

###
mySingle = ->
  privateVariable = 'something private'
  showProvate = ->
    console.log privateVariable
    return
  publicMethod: ->
    showProvate()
    return
  publicVar: 'the public can see this'

single = mySingle()
single.publicMethod()
console.log(single.publicVar)
###

Singleton = do ->
  init = ->
    publicMethod: ->
      console.log('hello world')
      return
    publicProperty: 'test'

  getInstance: ->
    if not instantiated
      instantiated = init()
    instantiated


