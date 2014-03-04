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

# Book (isbn, title, author) ->
#   if isbn is undefined
#     throw new Error 'book constructor requires an isbn'
#   @isbn = isbn
#   @title = title or 'no title specified'
#   return


# Book = (isbn, title, author) ->
#   if not @checkIsbn(isbn)
#     throw new Error 'book: invalid ISBN'
#   @isbn = isbn
#   @title = title or 'not title'
#   @author = author or 'not author'
#   return
# Book:: = 
#   checkIsbn: (isnb) ->
#     if isnb is undefined or typeof isnb not 'string'
#       return false
#     isbn = isbn.replace(/-/, '')
#     if isbn.length isnt 10 and isbn.length isnt 13
#       return false


# Publication = new Interface 'Publication', [
#     'getIsbn'
#     'setIsbn'
#     'getTitle'
#     'setTitle'
#     'getAuthor'
#     'setAuthor'
#     'display'
#   ]

# Book = (isbn, title, author) ->
#   @setIsbn isbn
#   @setTitle tilte
#   @setAuthor author
#   return

# Book:: = 
#   checkIsbn: (isbn) ->
#     return
#   getIsbn: ->
#     @isbn
#   setIsbn: (isbn) ->
#     @isbn = isbn
#     return
  

Person = (name) ->
  @name = name
  return

Person::getName = ->
  @name

# reader = new Person('john smith')
# console.log reader.getName()

Author = (name, books) ->
  Person.call(@,name)
  @books = books
  return

Author:: = new Person()


